const express = require("express");
var mysql = require("mysql");
var db = require("./database_con.js");
const cors = require("cors");
var app = express();
app.use(cors());
app.use(express.json());

app.listen(8080, () => {
  console.log("server started at port 8080");
});

app.post("/signin_user", (req, res) => {
  const { email, password } = req.body;
  var sql2 =
    "select * from user where email = '" +
    email +
    "'and password = '" +
    password +
    "';";
    
  db.query(sql2, (err, result, feilds) => {
    if (err) throw err;
    console.log(result);
    if (result.length == 1) {
      //   req.session.isAuth = true;
      //   req.session.userid = result[0].user_id;
      //   res.cookie("userid", result[0].user_id, {
      //     httpOnly: true,
      //   });

      res.send({
        status: 200,
        msg: "success",
        // userid: result[0].user_id,
        // Name: result[0].Name,
        // acc: result[0].acc_type,
      });
    } else {
      res.status(201);
      res.send("not valid credentials");
    }
  });
});

app.post("/signup_user", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(201);
    res.send("data not found");
    return;
  }

  var sq = "select email from user where email=?";

  db.query(sq, [email], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length === 1) {
      res.status(201);
      res.send("already a user");
      return;
    }
  });

  var sql =
    "insert into user(email,password) values('" +
    email +
    "','" +
    password +
    "');";

  db.query(sql, (err) => {
    if (err) throw err;

    res.send({ status: 200, msg: "success" });
  });
});

app.post("/saveres", (req, res) => {
  const { currExp, retAge } = req.body;
  const savReq = parseInt(currExp) * parseInt(retAge);
  if (!currExp || !retAge || !savReq) {
    res.status(201);
    res.send("data not found");
    return;
  }

  var sql =
    "insert into result(currExp,retAge,savReq) values(" +
    currExp +
    "," +
    retAge +
    "," +
    savReq +
    ");";

  db.query(sql, (err) => {
    if (err) throw err;

    res.send({ status: 200, msg: "success" });
  });
});
