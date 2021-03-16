const express = require('express');
const { json } = require("body-parser");

require('dotenv').config();

const app = express();
const { PORT } = require('./config/config');

console.log("PORT: " + PORT);

app.use(json());

app.use(require('./routes'));

app.listen(PORT, ( )=>{
    console.log(`Listen PORT: ${PORT}`);    
});

