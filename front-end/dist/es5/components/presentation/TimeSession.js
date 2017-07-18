"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var _reactToolboxLibCard = require("react-toolbox/lib/card");

var Card = _reactToolboxLibCard.Card;
var CardMedia = _reactToolboxLibCard.CardMedia;
var CardTitle = _reactToolboxLibCard.CardTitle;
var CardText = _reactToolboxLibCard.CardText;
var Button = require("react-toolbox/lib/button").Button;
var theme = _interopRequire(require("./TimeSession.scss"));

var Counter = _interopRequire(require("./Counter"));

var moment = _interopRequire(require("moment"));

var Moment = _interopRequire(require("react-moment"));

module.exports = function (props) {
	return React.createElement(
		Card,
		{ className: "time-session", theme: theme },
		React.createElement(CardMedia, {
			aspectRatio: "wide",
			children: React.createElement(Counter, { start_time: props.item.start_time, end_time: props.item.end_time })
		}),
		React.createElement(CardTitle, {
			title: props.item.name,
			subtitle: React.createElement(
				Moment,
				{ fromNow: true },
				props.item.start_time
			)
		})
	);
};