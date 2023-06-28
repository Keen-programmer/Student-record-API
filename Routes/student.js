const express = require('express');
const studentController = require('../controllers/studentController');

const route = express.Router();

route.get('/', studentController.getAllStudents)

route.get('/:id', studentController.getOneStudent);

route.patch('/', studentController.createNewStudent);

route.put('/:id', studentController.updateOneStudent);

route.delete('/:id', studentController.deleteOneStudent);


module.exports = route;