const express = require("express");
const app = express();
const path = require('path')
const cors = require('cors')
const expressLayouts = require('express-ejs-layouts')
const { port } = require("./config/index");
const cookieParser = require("cookie-parser");


require("./database/session");
require("./database/db");
require("./api/server");


app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());





app.listen(port, () => {
  console.log("Server is running");
});
