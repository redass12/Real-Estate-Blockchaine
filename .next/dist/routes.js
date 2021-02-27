"use strict";

var routes = require("next-routes")();

routes.add("/My-Houses/:address", "My-Houses/myHouses").add("/House/new", "/House/new").add("/House/:index", "/House/show");

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLHVCQUM4QixBQUQ5QixzQkFFRyxBQUZILElBRU8sQUFGUCxjQUVxQixBQUZyQixjQUdHLEFBSEgsSUFHTyxBQUhQLGlCQUd3QixBQUh4Qjs7QUFLQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkU6L1JlYUVzdGF0LU1pbmkgUHJvamVjdCJ9