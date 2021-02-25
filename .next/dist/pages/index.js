"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _RealEstate = require("../ethereum/RealEstate");

var _RealEstate2 = _interopRequireDefault(_RealEstate);

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../components/Layout");

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