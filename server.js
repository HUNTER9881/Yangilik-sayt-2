const express = require("express");
const app = express();
const path = require('path')
const cors = require('cors')
const expressLayouts = require('express-ejs-layouts')
const { port } = require("./config/index");
const cookieParser = require("cookie-parser");
const i18n = require("i18n-express");


const {
  session_key,
  session_time,
  session_collection,
  database,
} = require("./config/index");
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


app.use(i18n({
  translationsPath: path.join(__dirname, 'i18n'), // <--- use here. Specify translations files path.
  siteLangs: ["uz","ru", "en"],
  textsVarName: 'TARJIMA'
}));




require("./database/db")


app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());



// Frontend API
app.use('/', require('./page/client/index'))
app.use('/admin', require('./page/admin/index'))
app.use('/auth', require('./page/auth/index'))


// Backend API
app.use("/user", require("./router/userRoutor"))
app.use("/tag", require("./router/tagRouter"))
app.use("/category", require("./router/categoryRouter"))
app.use("/rss", require("./router/rssRouter"))
app.use("/comment", require("./router/commentRouter"))
app.use("/reply", require("./router/commentRouter"))
app.use("/advertisement", require("./router/advertisementRouter"))
app.use("/audio", require("./router/audioRouter"))
app.use("/contact", require("./router/contactRouter"))
app.use("/news", require("./router/newRouter"))
app.use("/rating", require("./router/ratingRouter"))
app.use("/main", require("./router/mainRouter"))


console.log("Hello Server")


app.listen(port, () => {
  console.log("Server is running");
});
