# crud-employee-sulhuf
employee crud operation for sulhuf


CRUD APIs for Employee.

MEAN
DB: MongoDB, localhost

Run Server: npm start

APIs:    Tool: Postman
-------
Create: http://localhost:9000/employee/create     POST
  
  Postman: Body, raw, JSON
  payload: {
      "name": "employee 1",
      "roll": "sr developer",
      "email": "myemail@gmail.com",
      "phone": "6612345",
      "address": "abcd street, house no, ...",
      "country": "kuwait"
  }
  

Get All: http://localhost:9000/employee    GET

Get Details: http://localhost:9000/employee/623c80b633db1fbbcedcfc63   GET

Update: http://localhost:9000/employee/update/623c80b633db1fbbcedcfc63  PUT
  Postman: Body, raw, JSON
  payload: {
      "name": "employee 1",
      "roll": "sr backend developer",
      "email": "myemail2@gmail.com",
      "phone": "6615555",
      "address": "abcd street, house no, ...",
      "country": "kuwait"
  }

Delete: http://localhost:9000/employee/delete/623c80b633db1fbbcedcfc63  DELETE


