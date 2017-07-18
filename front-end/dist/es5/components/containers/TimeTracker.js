"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var connect = require("react-redux").connect;
var Button = require("react-toolbox/lib/button").Button;
var Input = _interopRequire(require("react-toolbox/lib/input"));

var actions = _interopRequire(require("../../actions"));

var Counter = _interopRequire(require("../presentation/Counter"));

var TimeTracker = (function (Component) {
    function TimeTracker() {
        _classCallCheck(this, TimeTracker);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(TimeTracker, Component);

    _prototypeProperties(TimeTracker, null, {
        startCounter: {
            value: function startCounter(event) {
                event.preventDefault();
                this.props.startCounter();
            },
            writable: true,
            configurable: true
        },
        stopCounter: {
            value: function stopCounter(event) {
                event.preventDefault();
                var tracker = this.props.tracker;
                var newItem = { name: tracker.name, start_time: tracker.start_time, end_time: tracker.end_time };
                this.props.stopCounter(newItem, this.props.selected_filter);
            },
            writable: true,
            configurable: true
        },
        renderNotActiveCounter: {
            value: function renderNotActiveCounter() {
                return React.createElement(
                    "div",
                    { className: "time-tracker" },
                    React.createElement(Button, { label: "Start", raised: true, onClick: this.startCounter.bind(this) }),
                    React.createElement(Counter, null)
                );
            },
            writable: true,
            configurable: true
        },
        renderActiveCounter: {
            value: function renderActiveCounter() {
                return React.createElement(
                    "div",
                    { className: "time-tracker" },
                    React.createElement(Button, { label: "Stop", className: "stop", raised: true, onClick: this.stopCounter.bind(this) }),
                    React.createElement(Counter, {
                        start_time: this.props.tracker.start_time,
                        end_time: this.props.tracker.end_time
                    })
                );
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                if (this.props.tracker.active === true) {
                    return this.renderActiveCounter();
                }

                return this.renderNotActiveCounter();
            },
            writable: true,
            configurable: true
        }
    });

    return TimeTracker;
})(Component);

var stateToProps = function (state) {
    return {
        tracker: state.time_sessions.tracker,
        selected_filter: state.time_sessions.context_filter
    };
};

var dispatchToProps = function (dispatch) {
    return {
        startCounter: function () {
            return dispatch(actions.startCounter());
        },
        stopCounter: function (item, filter) {
            return dispatch(actions.stopCounter(item, filter));
        }
    };
};

module.exports = connect(stateToProps, dispatchToProps)(TimeTracker);