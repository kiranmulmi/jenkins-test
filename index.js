//importing node framework
const express = require('express');

const app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
    res.send('hello world 2345');
});
app.listen(process.env.PORT || 3000);

module.exports = app;