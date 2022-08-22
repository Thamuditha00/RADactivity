const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var superheroes = require("superheroes");
var supervillains = require("supervillains");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var text = "Click a button to generate a name";

app.get("/", function(req,res) {
  res.render("index", {text: text});
  text = "Click a button to generate a name";
})

app.post("/superhero", function(req,res) {
  text = superheroes.random();
  res.redirect("/");
})

app.post("/supervillain", function(req,res) {
  text = supervillains.random();
  res.redirect("/");
})

app.listen(3000);
