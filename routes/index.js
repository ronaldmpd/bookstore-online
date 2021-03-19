const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'Running'});
});

app.use(require('./authors'));
app.use(require('./books'));
app.use(require('./clients'));
app.use(require('./carts'));
module.exports = app;