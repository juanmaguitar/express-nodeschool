var express = require('express')
var port = process.argv[2] || 3000;
var templatesFolder = process.argv[3] || path.join(__dirname, 'templates');

var app = express();

app.set('views', templatesFolder )
app.set('view engine', 'jade')

app.get('/home', function(req, res) {
	res.render('index', {
		date: new Date().toDateString()
	})
})
app.listen(port)