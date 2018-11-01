// require 
var fs = require('fs');
var express = require('express');
//define vars
var food = fs.readFileSync('food.json');
var app = express();
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