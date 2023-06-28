const student = require("../Database/student")
const {v4: uuid} = require('uuid');

const getAllStudents = () => {
    const allStudent = student.getAllStudents();
    return allStudent;
}

const getOneStudent = (id) => {
    const studentObj = student.getOneStudent(id);
    return studentObj;
}

const createNewStudent = (newStudent) => {
    const studentToInsert = {
        ...newStudent,
        id: uuid(),
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
    };
    const insert = student.createNewStudent(studentToInsert);
    return insert;
}

const updateOneStudent = (id, changes) => {
    const updateStudent = student.updateOneStudent(id, changes)
    return updateStudent;
}

const deleteOneStudent = (id) => {
    const deleteStudent = student.deleteOneStudent(id);
    return deleteStudent;
}


module.exports = {
    getAllStudents,
    getOneStudent,
    createNewStudent,
    updateOneStudent,
    deleteOneStudent,
};