let DB = require("./db.json");


const getAllStudents = () => {
    return DB.students;
}

const getOneStudent = (id) => {
    const student = DB.students.find((student) => student.id === id);
    if(!student) {
        return;
    }
    return student;
};

const createNewStudent =  (newStudent) => {
    const alreadyAdded = DB.students.findIndex((student) => student.name === newStudent.name ) > -1; 
    if(alreadyAdded) {
        return;
    }
    DB.students.push(newStudent);

    return newStudent;
} 

const updateOneStudent = (id, changes) => {
    const studentID = DB.students.find((student) => student.id === id);
    
    if(studentID === -1){
        return;
    }
    
    const updatedStudent = {
        ...DB.students[studentID],
        ...changes,
        updateAt: Date.now().toLocaleString()
    };

    DB.students[studentID] = updatedStudent;
    return updatedStudent;
}

const deleteOneStudent = (id) => {
    const studentID = DB.students.find((student) => student.id === id);
    
    if(studentID === -1){
        return;
    }

    const deleteStudent = DB.students.splice(studentID, -1)
    return deleteStudent;
}

module.exports = { 
    getAllStudents,
    createNewStudent,
    getOneStudent,
    updateOneStudent,
    deleteOneStudent,
}