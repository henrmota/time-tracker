"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var actions = _interopRequire(require("../actions"));

var constants = _interopRequire(require("../constants"));

var Observable = require("rxjs/Observable").Observable;
require("rxjs");

module.exports = function (action$) {
  return action$.ofType(constants.STOP_COUNTER).map(function (action) {
    return actions.addItem(action.item, action.filter);
  });
};