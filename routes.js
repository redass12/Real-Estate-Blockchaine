const routes = require("next-routes")();

routes
  .add("/My-Houses/myHouses", "My-Houses/myHouses")
  .add("/House/new", "/House/new")
  .add("/House/:index", "/House/show");

module.exports = routes;
