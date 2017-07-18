"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var combineEpics = require("redux-observable").combineEpics;
var startCounter = _interopRequire(require("./startCounter"));

var stopCounter = _interopRequire(require("./stopCounter"));

var listTimeSessions = _interopRequire(require("./listTimeSessions"));

var addTimeSession = _interopRequire(require("./addTimeSession"));

module.exports = combineEpics(startCounter, stopCounter, addTimeSession, listTimeSessions);