package interfaces

import (
	"encoding/json"
	"time"

	"app/domain"
)

type timeSessionJson struct {
	ID        int       `json:"id"`
	Name      string    `json:"name"`
	StartTime time.Time `json:"start_time"`
	EndTime   time.Time `json:"end_time"`
}

func toJSON(timeSession domain.TimeSession) (string, error) {
	body, err := json.Marshal(
		&timeSessionJson{
			ID:        timeSession.ID,
			Name:      timeSession.Name,
			StartTime: timeSession.StartTime,
			EndTime:   timeSession.EndTime,
		},
	)

	if err != nil {
		return "", err
	}

	return string(body), nil
}

func listToJSON(timeSessions []*domain.TimeSession) (string, error) {
	converted := make([]*timeSessionJson, len(timeSessions))

	for i, timeSession := range timeSessions {
		converted[i] = &timeSessionJson{
			ID:        timeSession.ID,
			Name:      timeSession.Name,
			StartTime: timeSession.StartTime,
			EndTime:   timeSession.EndTime,
		}
	}

	body, err := json.Marshal(struct {
		Items []*timeSessionJson `json:"items"`
	}{Items: converted})

	if err != nil {
		return "", err
	}

	return string(body), nil
}

func fromJSON(jsonString string) (*domain.TimeSession, error) {
	jsonStruct := &struct {
		ID        int       `json:"id"`
		Name      string    `json:"name"`
		StartTime time.Time `json:"start_time"`
		EndTime   time.Time `json:"end_time"`
	}{}

	err := json.Unmarshal([]byte(jsonString), jsonStruct)

	if err != nil {
		return nil, err
	}

	timeSession := &domain.TimeSession{
		ID:        jsonStruct.ID,
		Name:      jsonStruct.Name,
		StartTime: jsonStruct.StartTime,
		EndTime:   jsonStruct.EndTime,
	}

	return timeSession, nil
}
