"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var TurboClient = require("../utils").TurboClient;
var moment = _interopRequire(require("moment"));

module.exports = {

	selectFilter: function (filter) {
		return { type: constants.SELECTED_FILTER, filter: filter };
	},
	startCounter: function () {
		return { type: constants.START_COUNTER };
	},
	refreshCounter: function () {
		return { type: constants.REFRESH_COUNTER };
	},
	stopCounter: function (item, filter) {
		return { type: constants.STOP_COUNTER, item: item, filter: filter };
	},
	listItems: function (filter) {
		return { type: constants.LIST_ITEMS, filter: filter };
	},
	replaceItems: function (items) {
		return { type: constants.REPLACE_ITEMS, items: items };
	},
	addItem: function (item, filter) {
		return { type: constants.ADD_ITEM, item: item, filter: filter };
	}
};