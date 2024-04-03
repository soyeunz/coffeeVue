const express = require("express");
const app = express();
const port = 8081;
const database = require("./database");

app.get("/list", (req, res) => {
  database.query("SELECT * FROM VUE_MENU", (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
