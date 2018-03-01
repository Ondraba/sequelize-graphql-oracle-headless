const mysql = require("mysql");
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

function pushUrlsToRouter() {
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
  console.log(routes.routes);
  console.log(routes.routes.length);
  console.log("Cant stop me now!");
}

setInterval(pushUrlsToRouter, 300000);
