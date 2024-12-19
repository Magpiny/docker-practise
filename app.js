/**
 * Backend with javascript
 * @package express nodemon and cors
 */

const express = require("express");
const cors = require("cors");
const uuid = require("uuid");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(cors);

// SET the view engine for express
app.set("view engine", "ejs");

//MIDDLEWARES
app.use(express.static("public/static/")); // serve static Files
app.use(express.json()); // serve JSON Files
app.use(express.urlencoded({ extended: true })); // serve express  Files with extended extensions  like  http://localhost:8080 and http://localhost:8080/static
app.use(express.text());

// Main Routes :: public  static Routes
//  Homepage Routes
app.get("/", (req, res) => {
    res.render("index", { title: "Homepage", url: "http://localhost:5000/" });
});

// Other Routes
const infoRouter = require("./routes/info");
const usersRouter = require("./routes/users");
const postRouter = require("./routes/posts");

app.use("/", infoRouter);
app.use("/users", usersRouter);
app.use("/post", postRouter);

// 404 Not Found Route: Displays 404 Not Found error message  when  no routes are Found
app.use((req, res) => {
    res.status(404).send(`404 Not Found`);
});

// Start the server on the specified port and port number of  the specified site.
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
