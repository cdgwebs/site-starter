const express = require('express');
const path = require('path');
const chalk = require('chalk');

const app = express();
const port = 3000;

app.get('/', (req, res, next) => {

    res.send('Hello from my app!');
    return next;

});

app.listen(3000, () => {
    console.log('Running in ' + path.join(__dirname, '/'));
    console.log(`Listening on port:${port}`);
});

module.exports = () => {
    return app;
};