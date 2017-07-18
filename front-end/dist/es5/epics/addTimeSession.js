"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var actions = _interopRequire(require("../actions"));

var constants = _interopRequire(require("../constants"));

var Observable = require("rxjs/Observable").Observable;
require("rxjs");

module.exports = function (action$) {
    return action$.ofType(constants.ADD_ITEM).mergeMap(function (action) {
        return Observable.ajax({
            url: constants.TIME_SESSION_NEW_URL,
            body: JSON.stringify(action.item),
            crossDomain: true,
            method: "POST",
            createXHR: function () {
                return new XMLHttpRequest();
            }
        }).map(function (response) {
            return actions.listItems(action.filter);
        });
    });
};