package interfaces

import (
	"app/usecases"
)

type deliveryMechanism interface {
	Setup()
	Run()
}

//NewTimeSessionService constructs a new TimeSessionService
func NewTimeSessionService(useCase *usecases.TimeSessionInteractor) *TimeSessionService {
	return &TimeSessionService{useCase: useCase}
}

//TimeSessionService is the struct responsible to convert the TimeSession domain
//into structures with more low level details to be used by infrastructure
type TimeSessionService struct {
	useCase *usecases.TimeSessionInteractor
}

//Save translates a json into time session and calls use case save
func (service TimeSessionService) Save(jsonString string) error {
	timeSession, err := fromJSON(jsonString)

	if err != nil {
		return err
	}

	service.useCase.Save(timeSession)

	return nil
}

//List list time sessions
func (service TimeSessionService) List(filter string) (string, error) {
	timeSessions, err := service.useCase.List(filter)

	if err != nil {
		return "", err
	}

	jsonItems, err := listToJSON(timeSessions)

	if err != nil {
		return "", err
	}

	return jsonItems, nil
}

//UpdateName updates the name of a time session.
func (service TimeSessionService) UpdateName(id int, name string) error {
	return service.useCase.UpdateName(id, name)
}
