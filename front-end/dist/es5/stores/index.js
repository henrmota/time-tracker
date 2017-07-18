"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _redux = require("redux");

var createStore = _redux.createStore;
var applyMiddleware = _redux.applyMiddleware;
var combineReducers = _redux.combineReducers;
var thunk = _interopRequire(require("redux-thunk"));

var timeSessionsReducer = require("../reducers").timeSessionsReducer;
var createEpicMiddleware = require("redux-observable").createEpicMiddleware;
var rootEpic = _interopRequire(require("../epics"));

var store;
module.exports = {

	configure: function (initialState) {
		// initialState can be null

		var epicMiddleware = createEpicMiddleware(rootEpic);
		var middleware = applyMiddleware(epicMiddleware);

		var reducers = combineReducers({ // insert reducers here
			time_sessions: timeSessionsReducer
		});

		if (initialState) {
			store = createStore(reducers, initialState, middleware);

			return store;
		}

		store = createStore(reducers, middleware);

		return store;
	},

	currentStore: function () {
		return store;
	}
};