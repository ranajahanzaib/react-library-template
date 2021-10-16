"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Box;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Box(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: props.className,
    style: props.style
  }, props.children);
}