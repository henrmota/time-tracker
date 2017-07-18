package contextfilter

const (
	//DAY represents Filter by day
	DAY = "day"
	//WEEK represents Filter by week
	WEEK = "week"
	//MONTH represents Filter by month
	MONTH = "month"
)

//IsValid return if a string is a valid filter
func IsValid(filter string) bool {

	if filter == DAY {
		return true
	}

	if filter == WEEK {
		return true
	}

	if filter == MONTH {
		return true
	}

	return false
}
