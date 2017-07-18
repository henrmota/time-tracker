package interfaces

import (
	"testing"
	"time"

	"../domain"
)

func TestJSONConversion(t *testing.T) {
	timeSession := &domain.TimeSession{
		ID:        0,
		Name:      "a_name",
		StartTime: time.Date(2009, time.November, 10, 23, 0, 0, 0, time.UTC),
		EndTime:   time.Date(2009, time.November, 10, 23, 0, 0, 0, time.UTC),
	}

	stringJSON, err := toJSON(*timeSession)

	if err != nil {
		t.Error(err)
	}

	timeSessionFromJSON, err := fromJSON(stringJSON)

	if err != nil {
		t.Error(err)
	}

	if !timeSession.EqualsTo(*timeSessionFromJSON) {
		t.Errorf("Something wrong with from json")
	}

}
