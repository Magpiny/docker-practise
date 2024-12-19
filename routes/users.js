const express = require("express");

const router = express.Router();

router.get("/:id", (req, res) => {
  res.render("user", {
    title: "Homepage",
    url: `http://localhost:5000/${req.params.id}`,
  });
});

module.exports = router;
