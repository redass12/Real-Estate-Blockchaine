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
    className: "item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJ3aXRoZHJhd1JvdXRlIiwiaXNDb250cmFjdE93bmVyIiwiY3Vyc29yIiwib3duZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUN4QixNQUFNQyxhQUFhLEdBQUdELEtBQUssQ0FBQ0UsZUFBTixHQUNwQixNQUFDLDRDQUFEO0FBQU0sU0FBSyxFQUFFLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURvQixHQUlsQixJQUpKO0FBS0EsU0FDRSxNQUFDLHNEQUFEO0FBQU0sU0FBSyxFQUFDLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNENBQUQ7QUFBTSxTQUFLLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FEVDtBQUVFLE9BQUcsRUFBQyx1QkFGTjtBQUdFLFNBQUssRUFBQyxNQUhSO0FBSUUsVUFBTSxFQUFDLE1BSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFVRSxNQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLFlBQVEsRUFBQyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0Q0FBRDtBQUFNLFNBQUssRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQURGLEVBS0UsTUFBQyw0Q0FBRDtBQUFNLFNBQUssdUJBQWdCSCxLQUFLLENBQUNJLEtBQXRCLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQUxGLEVBUUdILGFBUkgsRUFTRSxNQUFDLDRDQUFEO0FBQU0sU0FBSyxFQUFDLFlBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGLENBVEYsQ0FWRixDQURGO0FBMEJELENBaENEOztLQUFNRixNO0FBa0NTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zYjNkODY4ZTM1ZWY5ZGEzNTg1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB3aXRoZHJhd1JvdXRlID0gcHJvcHMuaXNDb250cmFjdE93bmVyID8gKFxyXG4gICAgPExpbmsgcm91dGU9e1wiL3dpdGhkcmF3XCJ9PlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+d2l0aGRyYXc8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKSA6IG51bGw7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51IGNvbG9yPVwiZ3JleVwiPlxyXG4gICAgICA8TGluayByb3V0ZT1cIi9cIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICBzcmM9XCIvbG9nb190cmFuc3BhcmVudC5wbmdcIlxyXG4gICAgICAgICAgd2lkdGg9XCI1MHB4XCJcclxuICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIDxNZW51Lk1lbnUgcG9zaXRpb249XCJyaWdodFwiPlxyXG4gICAgICAgIDxMaW5rIHJvdXRlPVwiL1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPkhvbWU8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8TGluayByb3V0ZT17YC9NeS1Ib3VzZXMvJHtwcm9wcy5vd25lcn1gfT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5NeSBIb3VzZXM8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIHt3aXRoZHJhd1JvdXRlfVxyXG4gICAgICAgIDxMaW5rIHJvdXRlPVwiL0hvdXNlL25ld1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPis8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L01lbnUuTWVudT5cclxuICAgIDwvTWVudT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9