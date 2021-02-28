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
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
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
      lineNumber: 14,
      columnNumber: 9
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
    position: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Home")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/My-Houses/".concat(props.owner),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "My Houses")), withdrawRoute, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/House/new",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("a", {
    style: {
      backgroundColor: "rgb(252,179,50)",
      color: "#ffffff"
    },
    className: "item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    name: "plus",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  })))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJ3aXRoZHJhd1JvdXRlIiwiaXNDb250cmFjdE93bmVyIiwiY3Vyc29yIiwib3duZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3hCLE1BQU1DLGFBQWEsR0FBR0QsS0FBSyxDQUFDRSxlQUFOLEdBQ3BCLE1BQUMsNENBQUQ7QUFBTSxTQUFLLEVBQUUsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBRG9CLEdBSWxCLElBSko7QUFLQSxTQUNFLE1BQUMsc0RBQUQ7QUFBTSxTQUFLLEVBQUMsTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0Q0FBRDtBQUFNLFNBQUssRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUU7QUFBVixLQURUO0FBRUUsT0FBRyxFQUFDLHVCQUZOO0FBR0UsU0FBSyxFQUFDLE1BSFI7QUFJRSxVQUFNLEVBQUMsTUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVVFLE1BQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVcsWUFBUSxFQUFDLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDRDQUFEO0FBQU0sU0FBSyxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBREYsRUFLRSxNQUFDLDRDQUFEO0FBQU0sU0FBSyx1QkFBZ0JILEtBQUssQ0FBQ0ksS0FBdEIsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBTEYsRUFRR0gsYUFSSCxFQVNFLE1BQUMsNENBQUQ7QUFBTSxTQUFLLEVBQUMsWUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUU7QUFBRUkscUJBQWUsRUFBRSxpQkFBbkI7QUFBc0NDLFdBQUssRUFBRTtBQUE3QyxLQURUO0FBRUUsYUFBUyxFQUFDLE1BRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsNENBQUQ7QUFBTSxRQUFJLEVBQUMsTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERixDQVRGLENBVkYsQ0FERjtBQStCRCxDQXJDRDs7S0FBTVAsTTtBQXVDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2M2OGNkZWQwZDBiOTM4ZTk4ZTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rLCBJY29uIH0gZnJvbSBcIi4uL3JvdXRlc1wiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgd2l0aGRyYXdSb3V0ZSA9IHByb3BzLmlzQ29udHJhY3RPd25lciA/IChcclxuICAgIDxMaW5rIHJvdXRlPXtcIi93aXRoZHJhd1wifT5cclxuICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPndpdGhkcmF3PC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICkgOiBudWxsO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWVudSBjb2xvcj1cImdyZXlcIj5cclxuICAgICAgPExpbmsgcm91dGU9XCIvXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgc3JjPVwiL2xvZ29fdHJhbnNwYXJlbnQucG5nXCJcclxuICAgICAgICAgIHdpZHRoPVwiNTBweFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cclxuICAgICAgICA8TGluayByb3V0ZT1cIi9cIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5Ib21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPExpbmsgcm91dGU9e2AvTXktSG91c2VzLyR7cHJvcHMub3duZXJ9YH0+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+TXkgSG91c2VzPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICB7d2l0aGRyYXdSb3V0ZX1cclxuICAgICAgICA8TGluayByb3V0ZT1cIi9Ib3VzZS9uZXdcIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjUyLDE3OSw1MClcIiwgY29sb3I6IFwiI2ZmZmZmZlwiIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwicGx1c1wiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L01lbnUuTWVudT5cclxuICAgIDwvTWVudT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9