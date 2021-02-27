"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _routes = require("../routes");

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\ReaEstat-Mini Project\\pages\\index.js?entry";


var RealEstateIndex = function (_Component) {
  (0, _inherits3.default)(RealEstateIndex, _Component);

  function RealEstateIndex() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RealEstateIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RealEstateIndex.__proto__ || (0, _getPrototypeOf2.default)(RealEstateIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      owner: ""
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RealEstateIndex, [{
    key: "componentDidMount",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var accounts, owner;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context.sent;
                owner = accounts[0];

                this.setState({ owner: owner });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "renderTokens",
    value: function renderTokens() {
      var tokens = this.props.tokens.map(function (item, index) {
        return {
          image: "https://ipfs.io/ipfs/" + item.image,
          header: item.name + " add: " + item.owner.slice(0, 5),
          meta: item.adress,
          extra: _react2.default.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          }, _react2.default.createElement("a", { "class": "ui tag label", __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          }, item.price, " Wei"), item.inSell ? _react2.default.createElement("a", { "class": "ui teal tag label", __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          }, "In Sell") : _react2.default.createElement("a", { "class": "ui red tag label", __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          }, "Not In sell Yet")),
          description: _react2.default.createElement(_routes.Link, { route: "/House/" + index, __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          }, _react2.default.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          }, "view Home"))
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: tokens, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log("tokens", this.props.tokens);
      console.log(this.state.owner);
      return _react2.default.createElement(_Layout2.default, { owner: this.state.owner, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, this.renderTokens()));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var tokenCount, tokens;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _RealEstate2.default.methods.indexx().call();

              case 2:
                tokenCount = _context2.sent;
                _context2.next = 5;
                return _promise2.default.all(Array(parseInt(tokenCount)).fill().map(function (element, index) {
                  return _RealEstate2.default.methods.indexToToken(index).call();
                }));

              case 5:
                tokens = _context2.sent;
                return _context2.abrupt("return", { tokens: tokens });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps() {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RealEstateIndex;
}(_react.Component);

exports.default = RealEstateIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWxFc3RhdGUiLCJDYXJkIiwiQnV0dG9uIiwiR3JpZCIsIkxheW91dCIsIkxpbmsiLCJ3ZWIzIiwiUmVhbEVzdGF0ZUluZGV4Iiwic3RhdGUiLCJvd25lciIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJzZXRTdGF0ZSIsInRva2VucyIsInByb3BzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaW1hZ2UiLCJoZWFkZXIiLCJuYW1lIiwic2xpY2UiLCJtZXRhIiwiYWRyZXNzIiwiZXh0cmEiLCJwcmljZSIsImluU2VsbCIsImRlc2NyaXB0aW9uIiwiY29uc29sZSIsImxvZyIsInJlbmRlclRva2VucyIsIm1ldGhvZHMiLCJpbmRleHgiLCJjYWxsIiwidG9rZW5Db3VudCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsImluZGV4VG9Ub2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFTLEFBQU0sQUFBUTs7QUFDdkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUNYOzs7Ozs7Ozs7Ozs7Ozs4TixBQUNKO2EsQUFBUSxBQUNDO0FBREQsQUFDTjs7Ozs7Ozs7Ozs7Ozt1QkFnQnVCLGNBQUEsQUFBSyxJLEFBQUwsQUFBUzs7bUJBQTFCO0Esb0NBQ0E7QSx3QkFBUSxTLEFBQUEsQUFBUyxBQUV2Qjs7cUJBQUEsQUFBSyxTQUFTLEVBQUUsT0FBaEIsQUFBYyxBQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBR1YsQUFDYjtVQUFNLGNBQVMsQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixJQUFJLFVBQUEsQUFBQyxNQUFELEFBQU8sT0FBVSxBQUNwRDs7MkNBQ2lDLEtBRDFCLEFBQytCLEFBQ3BDO2tCQUFXLEtBQVgsQUFBZ0Isa0JBQWEsS0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLEdBRnpDLEFBRXdCLEFBQW9CLEFBQ2pEO2dCQUFNLEtBSEQsQUFHTSxBQUNYO2lDQUNFLGNBQUE7O3dCQUFBOzBCQUFBLEFBQ0U7QUFERjtBQUFBLFdBQUEsa0JBQ0UsY0FBQSxPQUFHLFNBQUgsQUFBUzt3QkFBVDswQkFBQSxBQUF5QjtBQUF6QjtrQkFBQSxBQUE4QixPQURoQyxBQUNFLEFBQ0MsY0FBQSxBQUFLLHlCQUNKLGNBQUEsT0FBRyxTQUFILEFBQVM7d0JBQVQ7MEJBQUE7QUFBQTtXQUFBLEVBREQsQUFDQyw2QkFFQSxjQUFBLE9BQUcsU0FBSCxBQUFTO3dCQUFUOzBCQUFBO0FBQUE7V0FBQSxFQVZELEFBS0gsQUFLSSxBQUlOO3VDQUNFLEFBQUMsOEJBQUssbUJBQU4sQUFBdUI7d0JBQXZCOzBCQUFBLEFBQ0U7QUFERjtXQUFBLGtCQUNFLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxhQWhCTixBQUFPLEFBZUgsQUFDRSxBQUlQO0FBcEJRLEFBQ0w7QUFGSixBQUFlLEFBdUJmLE9BdkJlOzsyQ0F1QlIsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQO2NBQUEsQUFBUSxJQUFSLEFBQVksVUFBVSxLQUFBLEFBQUssTUFBM0IsQUFBaUMsQUFDakM7Y0FBQSxBQUFRLElBQUksS0FBQSxBQUFLLE1BQWpCLEFBQXVCLEFBQ3ZCOzZCQUNFLEFBQUMsa0NBQU8sT0FBTyxLQUFBLEFBQUssTUFBcEIsQUFBMEI7b0JBQTFCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQU07QUFBTjtBQUFBLGNBRkosQUFDRSxBQUNFLEFBQU0sQUFBSyxBQUdoQjs7Ozs7Ozs7Ozs7O3VCQXREMEIscUJBQUEsQUFBVyxRQUFYLEFBQW1CLFMsQUFBbkIsQUFBNEI7O21CQUEvQztBOzt5Q0FDZSxBQUFRLFVBQ3JCLFNBQU4sQUFBTSxBQUFTLGFBQWYsQUFDRyxPQURILEFBRUcsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDdkI7eUJBQU8scUJBQUEsQUFBVyxRQUFYLEFBQW1CLGFBQW5CLEFBQWdDLE9BQXZDLEFBQU8sQUFBdUMsQUFDL0M7QSxBQUxnQixBQUNuQixpQkFBQSxDQURtQjs7bUJBQWY7QTtrREFRQyxFQUFFLFEsQUFBRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdEWCxBLEFBOUQ4Qjs7a0JBOEQ5QixBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L1JlYUVzdGF0LU1pbmkgUHJvamVjdCJ9