package domain

import (
	"testing"
	"time"
)

func TestChangeName(t *testing.T) {

	originalName := "original_name"
	updatedName := "updated_name"

	timeSession := &TimeSession{
		ID:        0,
		Name:      originalName,
		StartTime: time.Date(2009, time.November, 10, 23, 0, 0, 0, time.UTC),
		EndTime:   time.Date(2009, time.November, 10, 23, 0, 0, 0, time.UTC),
	}

	if timeSession.Name != originalName {
		t.Errorf("The name before name update should be %s", originalName)
	}

	timeSession.UpdateName(updatedName)

	if timeSession.Name != updatedName {
		t.Errorf("The name after name update should be %s", updatedName)
	}
}

func TestCompareEquality(t *testing.T) {
	timeSession1 := &TimeSession{
		ID:        0,
		Name:      "a_name",
		StartTime: time.Date(2009, time.November, 10, 23, 0, 0, 0, time.UTC),
		EndTime:   time.Date(2009, time.November, 10, 23, 0, 0, 0, time.UTC),
	}

	timeSession2 := &TimeSession{
		ID:        0,
		Name:      "a_name",
		StartTime: time.Date(2009, time.November, 10, 23, 0, 0, 0, time.UTC),
		EndTime:   time.Date(2009, time.November, 10, 23, 0, 0, 0, time.UTC),
	}

	if !timeSession1.EqualsTo(*timeSession2) {
		t.Errorf("timeSession1 and timeSession2 sould be equal")
	}

}

func TestCompareNotEqual(t *testing.T) {
	timeSession1 := &TimeSession{
		ID:        0,
		Name:      "a_name",
		StartTime: time.Date(2009, time.November, 10, 23, 0, 0, 0, time.UTC),
		EndTime:   time.Date(2009, time.November, 10, 23, 0, 0, 0, time.UTC),
	}

	timeSession2 := &TimeSession{
		ID:        0,
		Name:      "another_name",
		StartTime: time.Date(2009, time.November, 10, 23, 0, 0, 0, time.UTC),
		EndTime:   time.Date(2009, time.November, 10, 23, 0, 0, 0, time.UTC),
	}

	if timeSession1.EqualsTo(*timeSession2) {
		t.Errorf("timeSession1 and timeSession2 sould not be equal")
	}

}
