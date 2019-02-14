// require 
var fs = require('fs');
var express = require('express');
var Parse = require('parse/node');
//define vars
var food = fs.readFileSync('food.json');
var app = express();

// enable CORS on /list route only
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
// body
app.get('/all', (req, res) => {
fs.readFile('food.json', (err, data) => {
    res.write(data)
    res.end();
});
});  
//exports
const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))