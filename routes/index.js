const router = require("express").Router();
const authors = require("./authors");
const morgan = require("morgan");

router.use(morgan("dev"));

router.use("/authors", authors);

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
