const express = require('express')

//configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// DEPENDENCIES
// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Pet Adoption')
})

//const dogController = require('./controllers/dogs_controller')
//app.use('/', dogController)



// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})

//Listen
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})
