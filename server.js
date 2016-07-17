var express = require('express')
var stylus = require('stylus');
var path = require('path');

var port = process.argv[2] || 3000;
var srcFolder = process.argv[3] || path.join(__dirname, 'src');

var app = express();

app.set('views', srcFolder )
app.set('view engine', 'jade')

app.use( stylus.middleware(srcFolder) )
app.use( express.static(srcFolder) )

app.get('/', function (req, res) {
  res.render('index',
  	{ title : 'Home' }
  )
})

app.listen(port)