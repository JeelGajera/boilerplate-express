var express = require('express');
var app = express();
console.log("Hello World");
require('dotenv').config()
var bodyParser = require("body-parser");
// require("body-parser");

// app.get("/", (req, res) => {
//   res.send('Hello Express');
// });

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/views/index.html");
// });

// app.use("/public", express.static(__dirname + "/public"));

// app.get("/json", (req, res) => {
//   res.json({"message" : "Hello json"})
// });

// app.get("/json", (req,res) => {
// const mySecret = process.env['MESSAGE_STYLE']
//   if(mySecret == "uppercase")
//     res.json({"message" : "HELLO JSON"});
//   else
//     res.json({"message" : "Hello json"});
// });

// app.use((req, res, next) => {
//   console.log("GET /json - ::ffff:127.0.0.1");
//   next();
// });

// app.get('/now', (req, res, next) => {
//     req.time = new Date().toString();
//     next();
//   }, (req, res) => {
//     res.send({time : req.time});
//   }
// );

// app.get('/:word/echo', (req, res) => {
//   const { word } = req.params;
//   res.json({echo : word});
// });

// app.get('/name', (req, res) => {
//   var firstname = req.query.first;
//   var lastname = req.query.last;

//   var { first : firstname, last : lastname } = req.query;
//   res.json({ name : `${firstname} ${lastname}`})
// })

app.use(bodyParser.urlencoded({extended : false}), bodyParser.json());

app.post("/name", (req, res) => {
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});


 module.exports = app;
