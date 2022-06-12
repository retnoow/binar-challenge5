const express = require("express");
let users = require("../db/user.json");
const app = express();

app.use(express.Router());
app.use(express.json());

// Get /user
app.get("/v1/user", (req, res, next) => res.json(users));
app.get("/v1/user/:id", (req, res, next) => {
  const user = users.find((item) => item.id === +req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(200).send("ID not found");
  }
});

// Post /user
app.post("/v1/user", (req, res, next) => {
  const { name, email, password } = req.body;
  const id = users[users.length - 1].id + 1;
  const user = {
    id,
    name,
    email,
    password,
  };

  users.push(user);
  res.status(201).json(user);
});

app.put("/v1/user/:id", (req, res, next) => {
  const user = users.find((item) => item.id === +req.params.id);
  const params = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  user = { ...user, ...params };
  users = users.map((item) => (item.id === user.id ? user : item));
  res.status(200).json(user);
});

app.delete("/v1/user/:id", (req, res, next) => {
  users = users.filter((item) => item.id !== +req.params.id);
  res.status(200).json({
    message: `Users id of ${req.params.id} has been deleted!`,
  });
});

module.exports = app;
