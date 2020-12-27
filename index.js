'use strict';

const express = require('express');
const quoteRepo = require('./quoterepo');
var app = express();
var port = process.env.PORT || 3001;

app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.send("Hi, welcome to snow quotes api, a compilation of quotes that I personally find interesting. Please see ____.___ to understand how to access this api.");

    next();
});


app.get('/quotes/:num?', function (req, res) {
    res.send(quoteRepo.getRandom(req.params.num || 1));
});

app.listen(port, function () {
    console.log(`Server running on port http://localhost:${port}`)
})