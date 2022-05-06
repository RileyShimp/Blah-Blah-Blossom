const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "epicodus",
  database: "blah_blah_blossom",
});

app.get("/words", (req, res) => {
  db.query("SELECT * FROM words ORDER BY RAND()", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result[1]);
    }
  });
});

app.listen(3001, () => {
  console.log("Yours server is running on port 3001");
});
