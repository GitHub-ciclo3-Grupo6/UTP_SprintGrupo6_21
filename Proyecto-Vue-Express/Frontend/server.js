const express = require('express')
const path = require('path')

const app = express();

const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'dist')));

const port = process.env.PORT || 8080
app.listen(port)

console.log('Listening on port '+port)