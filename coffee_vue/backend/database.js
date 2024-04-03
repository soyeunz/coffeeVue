const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "soy2",
  password: "1234",
  database: "VUE_MENU",
});
connection.connect((err) => {
    if (err) {
      console.error("Error connecting to database:", err);
      return;
    }
    console.log("Connected to database");
});
module.exports = connection;