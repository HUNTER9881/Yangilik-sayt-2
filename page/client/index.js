const express = require("express");
const router = express.Router();

// @description: Asosiy page uchun router
router.get("/", async (req, res, next) => {
  res.render("./client/index.ejs", { layout: "./clientLayouts.ejs" });
});

// @description: Asosiy page uchun router
router.get("/single/:id", async (req, res, next) => {
  res.render("./client/single.ejs", { layout: "./clientLayouts.ejs" });
});



module.exports = router;
