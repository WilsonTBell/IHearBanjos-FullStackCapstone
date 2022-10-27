
const express = require('express');
const app = express();
const ImageKit = require('imagekit');

const imagekit = new ImageKit({
    urlEndpoint: 'https://ik.imagekit.io/thv8ujxgn/',
    publicKey: 'public_lFDSRsjYBbat1QV6agMJFDDqUo4=',
    privateKey: 'private_QaMHnibEfcm70Ke/hY3GBLuYLRQ='
});

// allow cross-origin requests
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/auth', function (req, res) {
    var result = imagekit.getAuthenticationParameters();
    res.send(result);
});

app.listen(3001, function () {
    console.log('Live at Port 3001');
});