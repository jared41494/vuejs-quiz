var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname + "/dist"));

app.get('/public', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(process.env.PORT || 5000);