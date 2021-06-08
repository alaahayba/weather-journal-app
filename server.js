// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Require Express to run server and routes

const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser')

const app = express()
const port = 3000;

// Start up an instance of app
// Setup Server
app.listen(port, () => {
    console.log(` app listening at http://localhost:${port}`)
});

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


app.get('/welcome', (req, res) => {
    res.send('Hello World!')
})

app.get('/projectData', (req, res) => {
    res.json(projectData)
})

app.post('/projectData', (req, res) => {
    console.log(">>>>>>>>",req.body); 
    let { temperature, date, userResponse } = req.body;
    projectData = { temperature, date, userResponse }
    res.json(projectData)
})