package usecases

import (
	"app/domain"
	"app/domain/contextfilter"
	"fmt"
)

//TimeSessionStoreService abastracts the API to store time sessions.
type TimeSessionStoreService interface {
	Save(*domain.TimeSession) error
	Update(*domain.TimeSession) error
	List(string) ([]*domain.TimeSession, error)
	Get(int) (*domain.TimeSession, error)
}

//TimeSessionInteractor is the interactor responsible for time sessions actions
type TimeSessionInteractor struct {
	timeSessionStoreService TimeSessionStoreService
}

//NewTimeSessionInteractor instantiates a new TimeSessionInteractor
func NewTimeSessionInteractor(timeSessionStoreService TimeSessionStoreService) *TimeSessionInteractor {
	return &TimeSessionInteractor{timeSessionStoreService: timeSessionStoreService}
}

//List is the flow necessary to list the time sessions
func (interactor *TimeSessionInteractor) List(filter string) ([]*domain.TimeSession, error) {
	if !contextfilter.IsValid(filter) {
		return nil, fmt.Errorf("Filter %s is not a valid option", filter)
	}
	return interactor.timeSessionStoreService.List(filter)
}

//Save is the flow necessary to save a time session.
func (interactor *TimeSessionInteractor) Save(timeSession *domain.TimeSession) {
	interactor.timeSessionStoreService.Save(timeSession)
}

//UpdateName is the flow necessary to update a time session name
func (interactor *TimeSessionInteractor) UpdateName(id int, name string) error {
	timeSession, err := interactor.timeSessionStoreService.Get(id)

	if err != nil {
		return err
	}

	timeSession.UpdateName(name)

	return interactor.timeSessionStoreService.Update(timeSession)
}
