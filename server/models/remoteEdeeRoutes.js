const mysql = require("mysql2");
const routes = require("../routes");

const con = mysql.createConnection({
  host: "localhost",
  user: "db",
  password: "db",
  database: "db"
});

var routes_list = [];

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT id,prototype,url FROM STAGE_OBJECT", function(
    err,
    result,
    fields
  ) {
    if (err) throw err;
    routes_list = result;
  });
});

const initDynamicRoutes = () => {
  for (i = 0; i < routes_list.length; i++) {
    var remote_edee_url = routes_list[i].url;
    var remote_edee_prototype = routes_list[i].prototype;
    routes.add(remote_edee_url, remote_edee_prototype);
  }
  // routes_list.map(route => {
  //   console.log("mapuji");
  //   routes.add(route.url, route.prototype);
  // });
};

const pushUrlsToRouter = () => {
  for (i = 0; i < routes_list.length; i++) {
    var pushable = true;
    var remote_edee_url = routes_list[i].url;
    var remote_edee_prototype = routes_list[i].prototype;
    for (x = 0; x < routes.routes.length; x++) {
      var next_route_url = routes.routes[x].pattern;
      if (remote_edee_url == next_route_url) {
        pushable = false;
      }
    }
    if (pushable) {
      routes.add(remote_edee_url, remote_edee_prototype);
    }
  }
  // routes_list.map(route => {
  //   switch (routes.routes.includes(route)) {
  //     case true:
  //       routes.add(route.url, route.prototype);
  //       break;
  //     default:
  //       break;
  //   }
  // });
};

(() => {
  initDynamicRoutes();
  setInterval(pushUrlsToRouter, 100000);
})();
