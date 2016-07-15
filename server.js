var express = require('express')
var port = process.argv[2] || 3000;
var bodyparser = require('body-parser')

var app = express();

app.use( bodyparser.urlencoded({ extended: false }) )

app.post('/form', function(req, res) {
	var valueReceived = req.body.str;
	var reversed = valueReceived.split('').reverse().join('')
	res.end(reversed)
})
app.listen(port)