const express = require('express');
const bodyParser = require('body-parser')

const mongoose = require('mongoose');
const app = express();

const mongoUrl= "mongodb://localhost:27017/employees";

mongoose.connect(mongoUrl, {useNewUrlParser: true});
const con = mongoose.connection;
const Router= require("./Routes");

app.use('/employee', Router.employees);
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


try{
    con.on('open', ()=> {
        console.log('MongoDb Connected');
    })
} catch (err) {
    console.log("Error: " + err);
}

const port = 9000;
app.listen(port, () => {
    console.log('Server Running', port);
})