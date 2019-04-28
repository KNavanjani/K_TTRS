var router = require('./routes/api');
const express = require('express');
const bodyParser = require('body-parser');
//Setup Express App
const app = express();
const mongoose = require('mongoose');

var path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));


//Connect to MongoDB
//mongoose.connect('mongodb://localhost/db_ttrs', { useNewUrlParser: true });
mongoose.connect('mongodb://localhost/db_ttrs', { useMongoClient: true })
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

//Initialize routes
app.use('/api', router);

//Error Handling middleware
app.use(function (err, req, res, next) {
    res.status(422).send({ error: err.message });
});

//Listen for reuests
app.listen(process.env.port || 8000, function () {
    console.log('Now listening for requests...');
});

module.exports = app;