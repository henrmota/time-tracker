"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var Nav = _interopRequire(require("./Nav"));

var _containers = require("../containers");

var Users = _containers.Users;
var TimeSessionsList = _containers.TimeSessionsList;
var ListTabs = _containers.ListTabs;



/* The Users component is a sample container with corresponding reducer
 * and action creators for demonstration. Feel free to remove for your own project */

var items = [];

module.exports = function (props) {
	return React.createElement(
		"div",
		null,
		React.createElement(Nav, null),
		React.createElement(
			"div",
			null,
			React.createElement(ListTabs, null),
			React.createElement(
				"section",
				null,
				React.createElement(
					"div",
					{ className: "container" },
					React.createElement(TimeSessionsList, null)
				)
			)
		)
	);
};