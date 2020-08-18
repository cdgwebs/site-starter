const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');


const app = express();
const port = 3000;

// Middleware
app.use(morgan('combined'));

// Look in public first, then check the node_modules
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));



app.get('/', (req, res, next) => {

    res.sendFile(path.join(__dirname, '/views/index.html'));
    return next;

});

app.listen(3000, () => {
    debug('Running in ' + chalk.green(path.join(__dirname, '/')));
    debug('Listening on port: ' + chalk.green(port));
});

module.exports = () => {
    return app;
};