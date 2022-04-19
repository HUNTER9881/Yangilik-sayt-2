const express = require("express");
const app = express();
const {
  session_key,
  session_time,
  session_collection,
  database,
} = require("../config/index");

const session = require("express-session");
const mongoDbSession = require("connect-mongodb-session")(session);

const store = new mongoDbSession({
  uri: database,
  collection: session_collection,
});
app.use(
  session({
    secret: session_key,
    saveUninitialized: false,
    store: store,
    resave: false,
    cookie: {
      httpOnly: true,
      maxAge: session_time,
      sameSite: "strict",
    },
  })
);

