import constants from '../constants'
import { TurboClient } from '../utils'
import moment from 'moment'
export default {

	selectFilter: (filter) => {
		return {type: constants.SELECTED_FILTER, filter: filter}
	},
	startCounter: () => {
		return	{type: constants.START_COUNTER}
	},
	refreshCounter: () => {
		return {type: constants.REFRESH_COUNTER}
	},
	stopCounter: (item, filter) => {
		return {type: constants.STOP_COUNTER, item: item, filter: filter}
	},
	listItems: (filter) => {
		return {type: constants.LIST_ITEMS, filter: filter}
	},
	replaceItems: (items) => {
		return {type: constants.REPLACE_ITEMS, items: items}
	},
	addItem: (item, filter) => {
		return {type: constants.ADD_ITEM, item: item, filter: filter}
	},
	changeName: (id, name, filter) => {
		return {type: constants.CHANGE_NAME, id: id, name: name, filter: filter}
	},
	changeTrackerName: (name) => {
		return {type: constants.CHANGE_TRACKER_NAME, name: name}
	}
}
