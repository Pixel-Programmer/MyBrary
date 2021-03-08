if (process.env.NODE_ENV !== "production") require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const router = require("./routes/index");

const app = express();

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(router);

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDb Connected"))
  .catch((err) => console.log(`Error:  ${err}`));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
