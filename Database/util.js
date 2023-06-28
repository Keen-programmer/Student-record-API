const fs = require('fs');
let db = require ('./db.json')

const saveToDatabese = (DB) => {
    fs.writeFi('./db.json', JSON.stringify(db )
    );
    
};

module.exports = {saveToDatabese}