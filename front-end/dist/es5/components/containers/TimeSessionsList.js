"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var _reactToolbox = require("react-toolbox");

var Tab = _reactToolbox.Tab;
var Tabs = _reactToolbox.Tabs;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var TimeSession = _interopRequire(require("../presentation/TimeSession"));

var TimeSessionsList = (function (Component) {
    function TimeSessionsList() {
        _classCallCheck(this, TimeSessionsList);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(TimeSessionsList, Component);

    _prototypeProperties(TimeSessionsList, null, {
        componentDidMount: {
            value: function componentDidMount() {
                this.props.listItems(this.props.selected_filter);
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                if (this.props.items.length === 0) {
                    return React.createElement(
                        "h2",
                        null,
                        "No tasks for ",
                        this.props.context_filter
                    );
                }
                var items = this.props.items.map(function (item, i) {
                    return React.createElement(
                        "div",
                        { key: i, className: "col-md-4" },
                        React.createElement(TimeSession, { item: item })
                    );
                });

                return React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        items
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return TimeSessionsList;
})(Component);

var stateToProps = function (state) {
    return {
        items: state.time_sessions.items,
        selected_filter: state.time_sessions.context_filter
    };
};

var dispatchToProps = function (dispatch) {
    return {
        listItems: function (filter) {
            return dispatch(actions.listItems(filter));
        }
    };
};

module.exports = connect(stateToProps, dispatchToProps)(TimeSessionsList);