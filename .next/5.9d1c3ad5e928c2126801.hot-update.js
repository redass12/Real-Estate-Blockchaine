webpackHotUpdate(5,{

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(86);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(87);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _RealEstate = __webpack_require__(915);

var _RealEstate2 = _interopRequireDefault(_RealEstate);

var _semanticUiReact = __webpack_require__(565);

var _Layout = __webpack_require__(1488);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\ReaEstat-Mini Project\\pages\\index.js?entry";


var RealEstateIndex = function (_Component) {
  (0, _inherits3.default)(RealEstateIndex, _Component);

  function RealEstateIndex() {
    (0, _classCallCheck3.default)(this, RealEstateIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RealEstateIndex.__proto__ || (0, _getPrototypeOf2.default)(RealEstateIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RealEstateIndex, [{
    key: "renderTokens",
    value: function renderTokens() {
      var tokens = this.props.tokens.map(function (item) {
        return {
          image: "../static/house1.jpg",
          header: item.name,
          meta: item.address,
          description: "Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: tokens, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log("tokens", this.props.tokens);
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, this.renderTokens()));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var tokenCount, tokens;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _RealEstate2.default.methods.getTokensCount().call();

              case 2:
                tokenCount = _context.sent;
                _context.next = 5;
                return _promise2.default.all(Array(parseInt(tokenCount)).fill().map(function (element, index) {
                  return _RealEstate2.default.methods.tokens(index).call();
                }));

              case 5:
                tokens = _context.sent;
                return _context.abrupt("return", { tokens: tokens });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RealEstateIndex;
}(_react.Component);

exports.default = RealEstateIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWxFc3RhdGUiLCJDYXJkIiwiQnV0dG9uIiwiR3JpZCIsIkxheW91dCIsIlJlYWxFc3RhdGVJbmRleCIsInRva2VucyIsInByb3BzIiwibWFwIiwiaXRlbSIsImltYWdlIiwiaGVhZGVyIiwibmFtZSIsIm1ldGEiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJjb25zb2xlIiwibG9nIiwicmVuZGVyVG9rZW5zIiwibWV0aG9kcyIsImdldFRva2Vuc0NvdW50IiwiY2FsbCIsInRva2VuQ291bnQiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFTLEFBQU0sQUFBUTs7QUFDdkIsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7OzttQ0FlVyxBQUNiO1VBQU0sY0FBUyxBQUFLLE1BQUwsQUFBVyxPQUFYLEFBQWtCLElBQUksVUFBQSxBQUFDLE1BQVMsQUFDN0M7O2lCQUFPLEFBQ0UsQUFDUDtrQkFBUSxLQUZILEFBRVEsQUFDYjtnQkFBTSxLQUhELEFBR00sQUFDWDt1QkFKRixBQUFPLEFBS0gsQUFFTDtBQVBRLEFBQ0w7QUFGSixBQUFlLEFBVWYsT0FWZTs7MkNBVVIsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQO2NBQUEsQUFBUSxJQUFSLEFBQVksVUFBVSxLQUFBLEFBQUssTUFBM0IsQUFBaUMsQUFDakM7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFNO0FBQU47QUFBQSxjQUZKLEFBQ0UsQUFDRSxBQUFNLEFBQUssQUFHaEI7Ozs7Ozs7Ozs7Ozt1QkFsQzBCLHFCQUFBLEFBQVcsUUFBWCxBQUFtQixpQixBQUFuQixBQUFvQzs7bUJBQXZEO0E7O3lDQUVlLEFBQVEsVUFDckIsU0FBTixBQUFNLEFBQVMsYUFBZixBQUNHLE9BREgsQUFFRyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUN2Qjt5QkFBTyxxQkFBQSxBQUFXLFFBQVgsQUFBbUIsT0FBbkIsQUFBMEIsT0FBakMsQUFBTyxBQUFpQyxBQUN6QztBLEFBTGdCLEFBQ25CLGlCQUFBLENBRG1COzttQkFBZjtBO2lEQVFDLEVBQUUsUSxBQUFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJYLEEsQUF2QzhCOztrQkF1QzlCLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovUmVhRXN0YXQtTWluaSBQcm9qZWN0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "E:\\ReaEstat-Mini Project\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\ReaEstat-Mini Project\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45ZDFjM2FkNWU5MjhjMjEyNjgwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/Y2U0MDRmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFsRXN0YXRlIGZyb20gXCIuLi9ldGhlcmV1bS9SZWFsRXN0YXRlXCI7XHJcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiwgR3JpZCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5cclxuY2xhc3MgUmVhbEVzdGF0ZUluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgY29uc3QgdG9rZW5Db3VudCA9IGF3YWl0IFJlYWxFc3RhdGUubWV0aG9kcy5nZXRUb2tlbnNDb3VudCgpLmNhbGwoKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbnMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgQXJyYXkocGFyc2VJbnQodG9rZW5Db3VudCkpXHJcbiAgICAgICAgLmZpbGwoKVxyXG4gICAgICAgIC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gUmVhbEVzdGF0ZS5tZXRob2RzLnRva2VucyhpbmRleCkuY2FsbCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7IHRva2VucyB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyVG9rZW5zKCkge1xyXG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5wcm9wcy50b2tlbnMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaW1hZ2U6IFwiLi4vc3RhdGljL2hvdXNlMS5qcGdcIixcclxuICAgICAgICBoZWFkZXI6IGl0ZW0ubmFtZSxcclxuICAgICAgICBtZXRhOiBpdGVtLmFkZHJlc3MsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkVsbGlvdCBpcyBhIHNvdW5kIGVuZ2luZWVyIGxpdmluZyBpbiBOYXNodmlsbGUgd2hvIGVuam95cyBwbGF5aW5nIGd1aXRhciBhbmQgaGFuZ2luZyB3aXRoIGhpcyBjYXQuXCIsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e3Rva2Vuc30gLz47XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRva2Vuc1wiLCB0aGlzLnByb3BzLnRva2Vucyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXY+e3RoaXMucmVuZGVyVG9rZW5zKCl9PC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWxFc3RhdGVJbmRleDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFBQTs7QUFHQTtBQUFBO0FBQ0E7QUFJQTtBQU5BO0FBUUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUFJQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQS9CQTtBQUNBO0FBREE7OztBQUVBO0FBSUE7QUFIQTtBQUNBO0FBRkE7O0FBUUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==