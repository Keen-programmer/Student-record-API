const routes = require('./Routes/student.js')
const Joi = require('joi')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();



//middlewares
app.use(bodyParser.json());
app.use('/api/students/', routes);


const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`listening on port ${port}`));


