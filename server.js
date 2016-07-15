var express = require('express')
var port = process.argv[2] || 3000;
var publicFolder = process.argv[3] || path.join(__dirname, 'public');

var app = express();
app.use( express.static(publicFolder) );
app.listen(port)