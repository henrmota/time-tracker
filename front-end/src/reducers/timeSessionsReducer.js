import constants from '../constants'
import moment from 'moment'

const DEFAULT_SELECTED_FILTER = 'day';
const NEW_SESSION = 'New Session';
var initialState = {
    context_filter: DEFAULT_SELECTED_FILTER,
	items: [],
    tracker: {
        active: false,
        name: NEW_SESSION,
        start_time: null,
        end_time: null
    }
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)

	switch (action.type) {
		case constants.SELECTED_FILTER:
			newState['context_filter'] = action.filter
            return newState;
        case constants.START_COUNTER:
            const now = moment();
            newState['tracker'] = {
                active: true,
                name: state['tracker']['name'],
                start_time: now.format(),
                end_time: now.format()
            }
            return newState;
        case constants.REFRESH_COUNTER:
            newState['tracker'] = {
                active: true,
                name: state.tracker.name,
                start_time: state.tracker.start_time,
                end_time: moment().format()
            }
            return newState;
        case constants.STOP_COUNTER:
            newState['tracker'] = {
                active: false,
                name: NEW_SESSION,
                start_time: null,
                end_time: null
            }
            return newState;
        case constants.REPLACE_ITEMS:
            newState['items'] = action.items;
            return newState;
        case constants.CHANGE_TRACKER_NAME:
            let newTracker = Object.assign({}, state['tracker']);
            newTracker['name'] = action.name;
            newState['tracker'] = newTracker;
            return newState;
        default:
		return state
	}
}
