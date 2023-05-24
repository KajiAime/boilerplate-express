let express = require('express');
let app = express();
require('dotenv').config();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', function(req, res) {
    let texts = "Hello json";
    const cases = process.env.MESSAGE_STYLE;
    if(cases === "uppercase"){
        res.json({message: texts.toUpperCase()});
    }else{
        res.json({message:texts});
    }
});

app.use('/public', express.static(__dirname + '/public'));



































 module.exports = app;
