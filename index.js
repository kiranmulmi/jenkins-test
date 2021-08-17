const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', function (req, res) {
    res.json({
        success: true,
        data: "kiran"
    });
})

const server = app.listen(8081, function () {
    const host = server.address().address
    const port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})