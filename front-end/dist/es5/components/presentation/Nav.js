"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var AppBar = _interopRequire(require("react-toolbox/lib/app_bar"));

var theme = _interopRequire(require("./Nav.scss"));

var _containers = require("../containers");

var ListTabs = _containers.ListTabs;
var TimeTracker = _containers.TimeTracker;
module.exports = function (props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			AppBar,
			{ className: "app-bar", fixed: true, title: "Time Tracker", theme: theme },
			React.createElement(TimeTracker, null)
		),
		React.createElement("div", { className: "fixed-placeholder" })
	);
};