const express = require('express');
const path = require('path');

let app = express()
app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 80);