"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Register = (function (Component) {
	function Register() {
		_classCallCheck(this, Register);

		if (Component != null) {
			Component.apply(this, arguments);
		}
	}

	_inherits(Register, Component);

	_prototypeProperties(Register, null, {
		render: {
			value: function render() {
				return React.createElement(
					"div",
					null,
					"Register page"
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Register;
})(Component);

var styles = {
	nav: {
		paddingTop: 16,
		paddingRight: 44,
		textAlign: "right",
		width: "100%",
		height: 54,
		background: "rgba(0,0,0,0.7)",
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		zIndex: 2,
		display: "block"
	},
	menuItem: {
		color: "#fff",
		marginLeft: 48,
		fontWeight: 200
	}
};

module.exports = Register;