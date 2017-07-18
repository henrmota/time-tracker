package main

import (
	"app/infrastructure/db"
	"app/infrastructure/web"
	"app/interfaces"
	usecases "app/usecases"
)

func main() {
	repository := db.NewRepository()
	interactor := usecases.NewTimeSessionInteractor(repository)
	services := interfaces.NewTimeSessionService(interactor)
	web := web.NewTimeSessionWebDelivery(services)
	web.Setup()
	web.Run()
}
