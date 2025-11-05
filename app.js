//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//라우팅
const home = require("./routers/home");
//앱 세팅
app.set('views', './views');
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use("/", home);

module.exports = app;