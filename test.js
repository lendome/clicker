const express = require("express");
const mysql = require("mysql");

const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clicker",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Connected");
});

db.connect(function (err) {
  if (err) {
  }
  console.log("Connected!");
  var sql =
    "INSERT INTO user (username, password) VALUES ('Company Inc', 'Highway 37')";
  db.query(sql, function (err, result) {
    if (err) {
      throw err;
    }
    console.log("1 record inserted");
  });
});

app.listen("3000", () => {
  console.log("Started");
});
