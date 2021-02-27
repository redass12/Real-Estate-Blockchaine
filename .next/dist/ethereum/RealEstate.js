"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _RealEstate = require("./build/RealEstate.json");

var _RealEstate2 = _interopRequireDefault(_RealEstate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_RealEstate2.default.interface), "0x2Ae841d3276D7f1D6e44f6169C7E96d8e5354BD7");

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxSZWFsRXN0YXRlLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJSZWFsRXN0YXRlIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXVCLEFBQXZCOzs7Ozs7QUFFQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ2YsS0FBSyxBQUFMLE1BQVcscUJBQVcsQUFBdEIsQUFEZSxZQUVmLEFBRmUsQUFBakIsQUFLQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJSZWFsRXN0YXRlLmpzIiwic291cmNlUm9vdCI6IkU6L1JlYUVzdGF0LU1pbmkgUHJvamVjdCJ9