// DEPENDENCIES
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

const dogController = require('./controllers/dogs_controller')
app.use('/dogs', dogController)

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Pet Adoption')
})

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})

//Listen
app.listen(3002, () => {
    console.log('listening on port', 3002);
})
