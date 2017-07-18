"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var AppBar = _interopRequire(require("react-toolbox/lib/app_bar"));

var theme = _interopRequire(require("./Nav.scss"));

var moment = _interopRequire(require("moment"));

module.exports = function (props) {
    var now = moment().format();
    var counter = moment.utc(moment(props.end_time || now).diff(moment(props.start_time || now))).format("HH:mm:ss");

    return React.createElement(
        "div",
        { className: "counter" },
        counter
    );
};