var mysql = require("mysql");
var db = mysql.createConnection({
  hostname: "localhost",
  user: "root",
  password: "root",
  database: "retcalc",
});

db.connect(function (err) {
  if (err) {
    throw new Error("kyu");
  }
}); // end of connect function

module.exports = db;
