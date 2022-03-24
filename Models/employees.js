const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    roll: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true, 
    },  
    phone: {
        type: Number,
        required: true, 
    }, 
    address: {
        type: String,
        required: true, 
    },  
    country: {
        type: String,
        required: true, 
    },     
    registered_on: {
        type: Date,
        default: new Date(),
    },
});

var employees = mongoose.model('employees', employeeSchema);
module.exports = employees;