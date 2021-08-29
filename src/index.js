const express = require('express');
const morgan = require('morgan');

// Inicializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.use(morgan('dev'));

// Global variables

// Routes

// Public

// Starting the server
app.listen(app.get('port'),()=>{
    console.log('Server on port ', app.get('port'));
});