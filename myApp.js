let express = require('express');
let app = express();
require('dotenv').config();

app.use(function(req, res, next) {
    console.log(req.method +" " +req.path +" - " +req.ip);
    next();
});

app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res){
    res.send({time: req.time});
});

app.get('/:word/echo', function(req, res) {
    res.send({echo: req.params.word});
});

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
