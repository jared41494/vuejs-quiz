var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

let app = express();
app.use(serveStatic(__dirname + "/dist"));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.listen(process.env.PORT || 5000);