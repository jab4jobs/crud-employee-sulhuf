const express = require("express");
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

const Controllers = require("../Controllers");

const router = express.Router();


router.get('/', Controllers.employees.getEmployees);

router.get('/:id', Controllers.employees.getSpecEmployee);

router.post('/create', jsonParser, Controllers.employees.createEmployee);

router.put('/update/:id', jsonParser,  Controllers.employees.updateEmployee);

router.delete('/delete/:id', jsonParser,  Controllers.employees.deleteEmployee);

module.exports = router;

