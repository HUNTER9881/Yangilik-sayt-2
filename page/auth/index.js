const express = require("express");
const router = express.Router();

// @description: "Login" page uchun router
router.get("/login", async (req, res, next) => {
  res.render("./auth/login.ejs", { layout: "./authLayout.ejs" });
});

// @description: "Login" page uchun router
router.get("/forgetPassword", async (req, res, next) => {
  res.render("./auth/forgetPassword.ejs", { layout: "./authLayout.ejs" });
});

module.exports = router;
