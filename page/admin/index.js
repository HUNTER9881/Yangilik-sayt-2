const express = require("express");
const router = express.Router();

// @description: "Dashboard" page uchun router
router.get("/dashboard", async (req, res, next) => {
  res.render("./admin/dashboard.ejs", { layout: "./adminLayout.ejs" });
});

// @description: "Advertisement" page uchun router
router.get("/advertisement", async (req, res, next) => {
  res.render("./admin/advertisement.ejs", { layout: "./adminLayout.ejs" });
});

// @description: "Audio" page uchun router
router.get("/audio", async (req, res, next) => {
  res.render("./admin/audio.ejs", { layout: "./adminLayout.ejs" });
});

// @description: "Category" page uchun router
router.get("/category", async (req, res, next) => {
  res.render("./admin/category.ejs", { layout: "./adminLayout.ejs" });
});

// @description: "Contact" page uchun router
router.get("/contact", async (req, res, next) => {
  res.render("./admin/contact.ejs", { layout: "./adminLayout.ejs" });
});

// @description: "News" page uchun router
router.get("/news", async (req, res, next) => {
  res.render("./admin/news.ejs", { layout: "./adminLayout.ejs" });
});

// @description: "Tag" page uchun router
router.get("/tag", async (req, res, next) => {
  res.render("./admin/tag.ejs", { layout: "./adminLayout.ejs" });
});

// @description: "Rss" page uchun router
router.get("/rss", async (req, res, next) => {
  res.render("./admin/rss.ejs", { layout: "./adminLayout.ejs" });
});

// @description: "User" page uchun router
router.get("/user", async (req, res, next) => {
  res.render("./admin/user.ejs", { layout: "./adminLayout.ejs" });
});

// @description: "Profile" page uchun router
router.get("/profile", async (req, res, next) => {
  res.render("./admin/profile.ejs", { layout: "./adminLayout.ejs" });
});

module.exports = router;
