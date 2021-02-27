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

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _RealEstate = require("../../ethereum/RealEstate");

var _RealEstate2 = _interopRequireDefault(_RealEstate);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\ReaEstat-Mini Project\\pages\\My-Houses\\myHouses.js?entry";


var myHouses = function (_Component) {
  (0, _inherits3.default)(myHouses, _Component);

  function myHouses() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, myHouses);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = myHouses.__proto__ || (0, _getPrototypeOf2.default)(myHouses)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loadingInSell: false,
      loadingNotSell: false
    }, _this.renderTokens = function () {
      var filtredArray = _this.props.tokens.filter(function (item) {
        return item[3] !== "";
      });

      console.log("filtred Array ", filtredArray);
      //https://ipfs.io/ipfs/0x22059D87851EE41A824FEa59A4336E444679E37a

      var tokens = filtredArray.map(function (item, index) {
        return _react2.default.createElement(_semanticUiReact.Card, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, _react2.default.createElement(_semanticUiReact.Image, { src: "https://ipfs.io/ipfs/" + item[3], wrapped: true, ui: false, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }), _react2.default.createElement(_semanticUiReact.Card.Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, item[1]), _react2.default.createElement(_semanticUiReact.Card.Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, _react2.default.createElement("span", { className: "date", __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, item[2])), _react2.default.createElement(_semanticUiReact.Card.Description, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, "Matthew is a musician living in Nashville."), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, _react2.default.createElement(_semanticUiReact.Button, {
          color: "green",
          disabled: item[4],
          loading: _this.state.loadingInSell,
          onClick: _this.sellToken.bind(null, index, item[5], item[0]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, "Put In Sell"), _react2.default.createElement(_semanticUiReact.Button, {
          color: "red",
          disabled: !item[4],
          loading: _this.state.loadingNotSell,
          onClick: _this.stopSellToken.bind(null, index, item[5], item[0]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, "Stop In Sell"))));
      });
      return tokens;
    }, _this.sellToken = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(index, id1, id2) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({ loadingInSell: true });
                _context.prev = 1;
                _context.next = 4;
                return _RealEstate2.default.methods.putTokenInSell(index, parseInt(id1, 10), parseInt(id2, 10)).send({ from: _this.props.owner });

              case 4:
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);

                console.log(_context.t0);

              case 9:
                _this.setState({ loadingInSell: false });
                _routes.Router.push("/My-Houses/" + _this.props.owner);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[1, 6]]);
      }));

      return function (_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.stopSellToken = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(index, id1, id2) {
        var accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.setState({ loadingNotSell: true });
                _context2.prev = 1;

                console.log("fasdfsadf");

                _context2.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context2.sent;
                _context2.next = 8;
                return _RealEstate2.default.methods.stopSellToken(index, parseInt(id1, 10), parseInt(id2, 10)).send({ from: _this.props.owner });

              case 8:
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](1);

                console.log(_context2.t0);

              case 13:
                _this.setState({ loadingNotSell: false });
                _routes.Router.push("/My-Houses/" + _this.props.owner);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[1, 10]]);
      }));

      return function (_x4, _x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(myHouses, [{
    key: "render",
    value: function render() {
      console.log("asfasfasdf", this.props.tokens);
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, "My Homes "), this.renderTokens()));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
        var owner, numberOfTokens, tokens;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                owner = props.query.address;
                _context3.next = 3;
                return _RealEstate2.default.methods.getNoOfTokenByOwner(owner).call();

              case 3:
                numberOfTokens = _context3.sent;
                _context3.next = 6;
                return _promise2.default.all(Array(parseInt(numberOfTokens)).fill().map(function (element, index) {
                  return _RealEstate2.default.methods.getTokenByOwner(owner, index).call();
                }));

              case 6:
                tokens = _context3.sent;
                return _context3.abrupt("return", { tokens: tokens, owner: owner });

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getInitialProps(_x7) {
        return _ref4.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return myHouses;
}(_react.Component);

exports.default = myHouses;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxNeS1Ib3VzZXNcXG15SG91c2VzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsIkltYWdlIiwiSWNvbiIsIkxheW91dCIsIlJlYWxFc3RhdGUiLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIm15SG91c2VzIiwic3RhdGUiLCJsb2FkaW5nSW5TZWxsIiwibG9hZGluZ05vdFNlbGwiLCJyZW5kZXJUb2tlbnMiLCJmaWx0cmVkQXJyYXkiLCJwcm9wcyIsInRva2VucyIsImZpbHRlciIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaW5kZXgiLCJzZWxsVG9rZW4iLCJiaW5kIiwic3RvcFNlbGxUb2tlbiIsImlkMSIsImlkMiIsInNldFN0YXRlIiwibWV0aG9kcyIsInB1dFRva2VuSW5TZWxsIiwicGFyc2VJbnQiLCJzZW5kIiwiZnJvbSIsIm93bmVyIiwicHVzaCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJxdWVyeSIsImFkZHJlc3MiLCJnZXROb09mVG9rZW5CeU93bmVyIiwiY2FsbCIsIm51bWJlck9mVG9rZW5zIiwiYWxsIiwiQXJyYXkiLCJmaWxsIiwiZWxlbWVudCIsImdldFRva2VuQnlPd25lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVEsQUFBTzs7QUFDOUIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFjOzs7Ozs7O0ksQUFFdkI7Ozs7Ozs7Ozs7Ozs7OztnTixBQUNKO3FCQUFRLEFBQ1MsQUFDZjtzQixBQUZNLEFBRVU7QUFGVixBQUNOLGEsQUFpQkYsZUFBZSxZQUFNLEFBQ25CO1VBQU0scUJBQWUsQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixPQUFPLFVBQUEsQUFB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QUU5Qjs7d0JBQUEsQUFBUSxJQUhJLEFBR1osQUFBWTs7aUNBSEE7dUJBS1csY0FBQSxBQUFLLElBTGhCLEFBS1csQUFBUzs7bUJBQTFCO0FBTE0scUNBQUE7aUNBQUE7dUJBTU4scUJBQUEsQUFBVyxRQUFYLEFBQ0gsY0FERyxBQUNXLE9BQU8sU0FBQSxBQUFTLEtBRDNCLEFBQ2tCLEFBQWMsS0FBSyxTQUFBLEFBQVMsS0FEOUMsQUFDcUMsQUFBYyxLQURuRCxBQUVILEtBQUssRUFBRSxNQUFNLE1BQUEsQUFBSyxNQVJULEFBTU4sQUFFRSxBQUFtQjs7bUJBUmY7aUNBQUE7QUFBQTs7bUJBQUE7aUNBQUE7a0RBVVo7O3dCQUFBLEFBQVEsY0FWSTs7bUJBWWQ7c0JBQUEsQUFBSyxTQUFTLEVBQUUsZ0JBQWhCLEFBQWMsQUFBa0IsQUFDaEM7K0JBQUEsQUFBTyxxQkFBbUIsTUFBQSxBQUFLLE1BYmpCLEFBYWQsQUFBcUM7O21CQWJ2QjttQkFBQTtpQ0FBQTs7QUFBQTtrQ0FBQTtBOzs7Ozs7Ozs7OzZCQWdCUCxBQUNQO2NBQUEsQUFBUSxJQUFSLEFBQVksY0FBYyxLQUFBLEFBQUssTUFBL0IsQUFBcUMsQUFDckM7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0MsbUJBSlAsQUFDRSxBQUNFLEFBRUcsQUFBSyxBQUliOzs7Ozs2RyxBQWxHNEI7Ozs7O21CQUNyQjtBLHdCQUFRLE1BQUEsQUFBTSxNLEFBQU07O3VCQUNHLHFCQUFBLEFBQVcsUUFBWCxBQUMxQixvQkFEMEIsQUFDTixPLEFBRE0sQUFFMUI7O21CQUZHO0E7O3lDQUdlLEFBQVEsVUFDckIsU0FBTixBQUFNLEFBQVMsaUJBQWYsQUFDRyxPQURILEFBRUcsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDdkI7eUJBQU8scUJBQUEsQUFBVyxRQUFYLEFBQW1CLGdCQUFuQixBQUFtQyxPQUFuQyxBQUEwQyxPQUFqRCxBQUFPLEFBQWlELEFBQ3pEO0EsQUFMZ0IsQUFDbkIsaUJBQUEsQ0FEbUI7O21CQUFmO0E7a0RBT0MsRUFBRSxRQUFGLFFBQVUsTyxBQUFWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUFqQlksQUF5R3ZCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im15SG91c2VzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L1JlYUVzdGF0LU1pbmkgUHJvamVjdCJ9