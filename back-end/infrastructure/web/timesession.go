package web

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"

	"app/interfaces"
)

//TimeSessionWebDelivery encapsulate the web delivery functionality.
type TimeSessionWebDelivery struct {
	mux      *mux.Router
	services *interfaces.TimeSessionService
}

//NewTimeSessionWebDelivery creates a new TimeSessionWebDelivery
func NewTimeSessionWebDelivery(services *interfaces.TimeSessionService) *TimeSessionWebDelivery {
	return &TimeSessionWebDelivery{mux: mux.NewRouter(), services: services}
}

func (delivery TimeSessionWebDelivery) saveHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")

	jsonBytes, err := ioutil.ReadAll(r.Body)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)

		return
	}

	err = delivery.services.Save(string(jsonBytes))
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)

		return
	}

	w.WriteHeader(http.StatusAccepted)
}

func (delivery TimeSessionWebDelivery) updateNameHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)

	jsonBytes, err := ioutil.ReadAll(r.Body)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)

		return
	}

	var jsonMap map[string]string
	err = json.Unmarshal(jsonBytes, &jsonMap)

	_, nameOk := jsonMap["name"]
	_, idOk := vars["id"]

	if err != nil || !nameOk || !idOk {
		w.WriteHeader(http.StatusBadRequest)

		return
	}
	id, err := strconv.Atoi(vars["id"])

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)

		return
	}

	err = delivery.services.UpdateName(id, jsonMap["name"])
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)

		return
	}

	w.WriteHeader(http.StatusAccepted)
}

func (delivery TimeSessionWebDelivery) listHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)

	w.Header().Set("Content-Type", "application/json; charset=UTF-8")

	result, err := delivery.services.List(vars["filter"])
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)

		return
	}

	w.WriteHeader(http.StatusAccepted)
	w.Write([]byte(result))
}

//Run the web timessession infrastructure
func (delivery *TimeSessionWebDelivery) Run() {
	http.ListenAndServe(":80", delivery.mux)
}

//Setup the web timesession infrastructure
func (delivery *TimeSessionWebDelivery) Setup() {
	delivery.mux.HandleFunc("/list/{filter}", delivery.listHandler)
	delivery.mux.HandleFunc("/new", delivery.saveHandler).Methods("POST")
	delivery.mux.HandleFunc("/update/{id}", delivery.updateNameHandler).Methods("POST")
}
