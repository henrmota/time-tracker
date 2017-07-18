package db

import (
	"app/domain"
	"app/domain/contextfilter"
	"time"

	"github.com/jinzhu/now"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	_ "github.com/lib/pq"
	_ "github.com/lib/pq/hstore"
)

type TimeSession struct {
	gorm.Model
	Name      string
	StartTime time.Time
	EndTime   time.Time
}

type Repository struct {
	db *gorm.DB
}

//NewRepository creates a new repo
func NewRepository() *Repository {
	con, err := gorm.Open("postgres", "host=db user=postgres dbname=postgres sslmode=disable password=postgres")
	if err != nil {
		panic(err)
	}
	con.AutoMigrate(&TimeSession{})

	return &Repository{db: con}
}

//List lists the time sessions filtered by a context
func (repo Repository) List(filterContext string) ([]*domain.TimeSession, error) {
	var timeSessions []*domain.TimeSession
	repo.findFilteredTimeSessions(filterContext, &timeSessions)

	return timeSessions, nil
}

func (repo Repository) findFilteredTimeSessions(filterContext string, timeSessions *[]*domain.TimeSession) {
	startDate := now.BeginningOfDay()
	endDate := now.EndOfDay()

	switch filterContext {
	case contextfilter.MONTH:
		startDate = now.BeginningOfMonth()
		endDate = now.EndOfMonth()
	case contextfilter.WEEK:
		startDate = now.BeginningOfWeek()
		endDate = now.EndOfWeek()
	}

	repo.db.Where("end_time BETWEEN ? AND ?", startDate, endDate).Order("end_time desc, start_time").Find(timeSessions)
}

//Save to db
func (repo *Repository) Save(timeSession *domain.TimeSession) error {

	dbTimeSession := repo.convertToDbTimeSession(timeSession)
	repo.db.Create(dbTimeSession)

	return nil
}

//Update to db
func (repo *Repository) Update(timeSession *domain.TimeSession) error {
	dbTimeSession := repo.convertToDbTimeSession(timeSession)
	repo.db.Save(dbTimeSession)

	return nil
}

//Get from db
func (repo Repository) Get(id int) (*domain.TimeSession, error) {
	timeSession := &domain.TimeSession{ID: id}
	repo.db.First(timeSession)

	return timeSession, nil
}

func (repo *Repository) convertToDbTimeSession(timeSession *domain.TimeSession) *TimeSession {
	return &TimeSession{Model: gorm.Model{ID: uint(timeSession.ID)}, Name: timeSession.Name, StartTime: timeSession.StartTime, EndTime: timeSession.EndTime}
}
