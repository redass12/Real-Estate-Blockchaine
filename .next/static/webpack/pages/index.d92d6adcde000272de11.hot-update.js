webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\ReaEstat-Mini Project\\components\\Header.js",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Header = function Header(props) {
  var withdrawRoute = props.isContractOwner ? __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/withdraw",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("a", {
    className: "item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "withdraw")) : null;
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    color: "grey",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("img", {
    style: {
      cursor: "pointer"
    },
    src: "/logo_transparent.png",
    width: "50px",
    height: "50px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
    position: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "Home")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/My-Houses/".concat(props.owner),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "My Houses")), withdrawRoute, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/House/new",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "+"))));
};

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJ3aXRoZHJhd1JvdXRlIiwiaXNDb250cmFjdE93bmVyIiwiY3Vyc29yIiwib3duZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUN4QixNQUFNQyxhQUFhLEdBQUdELEtBQUssQ0FBQ0UsZUFBTixHQUNwQixNQUFDLDRDQUFEO0FBQU0sU0FBSyxFQUFFLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURvQixHQUlsQixJQUpKO0FBS0EsU0FDRSxNQUFDLHNEQUFEO0FBQU0sU0FBSyxFQUFDLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDRDQUFEO0FBQU0sU0FBSyxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRTtBQUFWLEtBRFQ7QUFFRSxPQUFHLEVBQUMsdUJBRk47QUFHRSxTQUFLLEVBQUMsTUFIUjtBQUlFLFVBQU0sRUFBQyxNQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFXRSxNQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLFlBQVEsRUFBQyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0Q0FBRDtBQUFNLFNBQUssRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQURGLEVBS0UsTUFBQyw0Q0FBRDtBQUFNLFNBQUssdUJBQWdCSCxLQUFLLENBQUNJLEtBQXRCLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQUxGLEVBUUdILGFBUkgsRUFTRSxNQUFDLDRDQUFEO0FBQU0sU0FBSyxFQUFDLFlBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGLENBVEYsQ0FYRixDQURGO0FBMkJELENBakNEOztLQUFNRixNO0FBbUNTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kOTJkNmFkY2RlMDAwMjcyZGUxMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB3aXRoZHJhd1JvdXRlID0gcHJvcHMuaXNDb250cmFjdE93bmVyID8gKFxyXG4gICAgPExpbmsgcm91dGU9e1wiL3dpdGhkcmF3XCJ9PlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+d2l0aGRyYXc8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKSA6IG51bGw7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51IGNvbG9yPVwiZ3JleVwiPlxyXG4gICAgICA8TWVudS5pdGVtPlxyXG4gICAgICAgIDxMaW5rIHJvdXRlPVwiL1wiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgIHNyYz1cIi9sb2dvX3RyYW5zcGFyZW50LnBuZ1wiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTBweFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvTWVudS5pdGVtPlxyXG4gICAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cclxuICAgICAgICA8TGluayByb3V0ZT1cIi9cIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5Ib21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPExpbmsgcm91dGU9e2AvTXktSG91c2VzLyR7cHJvcHMub3duZXJ9YH0+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+TXkgSG91c2VzPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICB7d2l0aGRyYXdSb3V0ZX1cclxuICAgICAgICA8TGluayByb3V0ZT1cIi9Ib3VzZS9uZXdcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj4rPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9NZW51Lk1lbnU+XHJcbiAgICA8L01lbnU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==