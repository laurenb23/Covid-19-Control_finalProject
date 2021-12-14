const express = require("express");
const ejs = require("ejs");

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ejs Middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));


app.get("/", (req, res) => {
    res.render("index");
});

app.get('/about', function(req, res) {
    res.render('../views/about.ejs');
});

app.get('/news_Page', function(req, res) {
    res.render('../views/news_Page.ejs');
});

app.get('/resources_Page', function(req, res) {
    res.render('../views/resources_Page.ejs');
});

app.get('/survey', function(req, res) {
    res.render('../views/survey.ejs');
});

app.get('/trends', function(req, res) {
    res.render('../views/trends.ejs');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));