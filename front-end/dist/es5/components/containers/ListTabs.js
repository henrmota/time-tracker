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

var filterOptions = ["day", "week", "month"];

var ListTabs = (function (Component) {
    function ListTabs() {
        _classCallCheck(this, ListTabs);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(ListTabs, Component);

    _prototypeProperties(ListTabs, null, {
        handleTabChange: {
            value: function handleTabChange(index) {
                this.props.selectFilter(filterOptions[index]);
            },
            writable: true,
            configurable: true
        },
        getSelectedTab: {
            value: function getSelectedTab(filterOption) {
                return filterOptions.indexOf(filterOption);
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                var tabs = filterOptions.map(function (item, i) {
                    return React.createElement(Tab, { key: item.id, label: item });
                });

                return React.createElement(
                    Tabs,
                    { className: "time-context", index: this.getSelectedTab(this.props.selected_filter), onChange: this.handleTabChange.bind(this) },
                    tabs
                );
            },
            writable: true,
            configurable: true
        }
    });

    return ListTabs;
})(Component);

var stateToProps = function (state) {
    return {
        selected_filter: state.time_sessions.context_filter
    };
};

var dispatchToProps = function (dispatch) {
    return {
        selectFilter: function (option) {
            return dispatch(actions.selectFilter(option));
        }
    };
};

module.exports = connect(stateToProps, dispatchToProps)(ListTabs);