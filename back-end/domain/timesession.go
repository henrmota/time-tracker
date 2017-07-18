package domain

import "time"

//TimeSession is a time interval with a name.
//Here I hide all low level decisions including tags for DB and WEB.
type TimeSession struct {
	ID        int
	Name      string
	StartTime time.Time
	EndTime   time.Time
}

//UpdateName updates the name of a time session.
func (timeSession *TimeSession) UpdateName(name string) {
	timeSession.Name = name
}

//EqualsTo tests if this timesession is equal to another
func (timeSession TimeSession) EqualsTo(toCompare TimeSession) bool {
	return timeSession.ID == toCompare.ID && timeSession.Name == toCompare.Name && timeSession.StartTime == toCompare.StartTime && timeSession.EndTime == toCompare.EndTime
}
