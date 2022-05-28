const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/db");

app.use(cors());
app.use(express.json());

const PORT = 3001;

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
