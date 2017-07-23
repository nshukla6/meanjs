'use strict';
const express=require('express');
const routes=require('./routes');
const app=express();
const mongoose = require('mongoose');
const bodyParser=require('body-parser');

//mongoose.connect('mongodb://localhost:27017/mean'); // connect to our database

app.set('port',process.env.PORT||3000);
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/api',routes.router);




app.listen(app.get('port'),()=>{
    console.log('Server is listening on port ',app.get('port'));
});