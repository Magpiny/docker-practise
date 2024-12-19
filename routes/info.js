const express = require("express");

const router = express.Router();

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/faqs", (req, res) => {
    res.render("faqs");
});

router.get("/contacts", (req, res) => {
    res.render("contacts");
});

router.get("/index", (req, res) => {
    res.render("index", { title: "Homepage", url: "http://localhost:5000/" });
})

router.get("/blog", (req, res) => {
    res.render("blog");
});

module.exports = router;
