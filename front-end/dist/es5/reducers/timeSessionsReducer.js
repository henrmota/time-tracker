"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var moment = _interopRequire(require("moment"));

var DEFAULT_SELECTED_FILTER = "day";

var initialState = {
    context_filter: DEFAULT_SELECTED_FILTER,
    items: [],
    tracker: {
        active: false,
        name: null,
        start_time: null,
        end_time: null
    }
};

module.exports = function (_x, action) {
    var state = arguments[0] === undefined ? initialState : arguments[0];
    var newState = Object.assign({}, state);

    switch (action.type) {
        case constants.SELECTED_FILTER:
            newState.context_filter = action.filter;
            return newState;
        case constants.START_COUNTER:
            var now = moment();
            newState.tracker = {
                active: true,
                name: now.format("Day D/M@ssHHss"),
                start_time: now.format(),
                end_time: now.format()
            };
            return newState;
        case constants.REFRESH_COUNTER:
            console.log("here");
            newState.tracker = {
                active: true,
                name: state.tracker.name,
                start_time: state.tracker.start_time,
                end_time: moment().format()
            };
            return newState;
        case constants.STOP_COUNTER:
            newState.tracker = {
                active: false,
                name: null,
                start_time: null,
                end_time: null
            };
            return newState;
        case constants.REPLACE_ITEMS:
            console.log(action.items);
            newState.items = action.items;
            return newState;
        default:
            return state;
    }
};