var express = require('express')
var path = require('path');
var crypto = require('crypto');

var port = process.argv[2] || 3000;

var app = express();

app.param('ID', function (req, res, next, id) {
  req.id = getDecryptedId(id);
  next()
})

app.put('/message/:ID', function(req, res){
	res.end(req.id)
});

function getDecryptedId (id) {
	return crypto.createHash('sha1')
		.update(new Date().toDateString() + id)
		.digest('hex')
}

app.listen(port)