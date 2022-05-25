const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const PORT = 3001;

const db = mysql.createConnection({
  user: "b3d77a579fe705",
  host: "us-cdbr-east-05.cleardb.net",
  password: "d4b21317",
  database: "heroku_2058cf205184fa2",
});

// mysql://b3d77a579fe705:d4b21317@us-cdbr-east-05.cleardb.net/heroku_2058cf205184fa2?reconnect=true

app.get("/words", (req, res) => {
  db.query("SELECT * FROM words ORDER BY RAND()", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result[1]);
    }
  });
});

app.get("/play", (req, res) => {
  db.query("SELECT * FROM words ORDER BY RAND()", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Yours server is running on port ${PORT}`);
});
