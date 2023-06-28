const studentService = require('../services/studentService');

const getAllStudents = (req, res) => {
    const allStudent = studentService.getAllStudents();
    res.send(allStudent)
};

const getOneStudent = (req, res) => {
    const {
        params: {id},
    } = req;
    if(!id) {
        res.send("not found");
    }

    const student = studentService.getOneStudent(id);
    res.status(201).send(student);
};

const createNewStudent = (req, res) => {
    let body = req.body; //body = req.body

    if(
        !body.name ||
        !body.course
    ) {
        return res.send("Name and course must be specified!")
    }
    const addStudent = {
        name: body.name,
        course: body.course
    };

    const createdStudent = studentService.createNewStudent(addStudent);
    res.status(201).send(createdStudent);
};

const updateOneStudent = (req, res) => {
    const {
        body,
        params: {id}
    } = req;

    if(!id) {
        return;
    }

    const updateStudent = studentService.updateOneStudent(id, body);
    res.send(updateStudent);
};

const deleteOneStudent = (req, res) => {
    const {
        params: {id}
    } = req;

    if(!id){
        return;
    }

    const deleteStudent = studentService.deleteOneStudent(id);
    res.send(deleteStudent);
};


module.exports = {
    getAllStudents,
    getOneStudent,
    createNewStudent,
    updateOneStudent,
    deleteOneStudent
};