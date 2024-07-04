"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactModal = _interopRequireDefault(require("react-modal"));
require("../css/modal.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Ajoutez du style pour la modal

_reactModal.default.setAppElement('#root'); // Assurez-vous que l'élément principal de l'application est défini

const ConfirmModal = _ref => {
  let {
    isOpen,
    onRequestClose,
    onConfirm,
    message
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactModal.default, {
    isOpen: isOpen,
    onRequestClose: onRequestClose,
    contentLabel: "Confirmation Modal",
    className: "modal",
    overlayClassName: "overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Confirmation"), /*#__PURE__*/_react.default.createElement("p", null, message), /*#__PURE__*/_react.default.createElement("div", {
    className: "button-group"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: onConfirm
  }, "Confirm"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: onRequestClose
  }, "Cancel"))));
};
var _default = exports.default = ConfirmModal;