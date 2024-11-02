const express = require('express')
const app = express()
const mysql = require('mysql2');
const dotenv = require('dotenv')


dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

// test the connection
db.connect((err) => {
  // if the connection is not successful
  if(err) {
    return console.log("Error connecting to the database: ", err)
  }

  // connection is successful
  console.log("Successfully connected to MySQL: ", db.threadId)
})

// GET
// POST
// PUT
// DELET

// Question 1 goes here
// retrieve all patients
app.get('', (req, res) => {
  const getPatients = "SELECT first_name, last_name patient_ID, date_of_birth FROM patients"
  db.query(getPatients, (err, data) => {
    // if i have an error
    if(err) {
      return res.status(400).send("Failed to get patients", err)
    }
    res.status(200).send(data)
  })
})


// Question 2 goes here
//retrieve all providers 
app.get('', (req, res) => {
  const getProviders = "SELECT first_name, last_name patient_ID, provider_specialty FROM providers"
  db.query(getProviders, (err, data) => {
    // if i have an error
    if(err) {
     return res.status(400).send("Failed to get providers", err)
    }
    res.status(200).send(data)
  })
})

// Question 3 goes here
 //filter patients by first name
app.get('', (req, res) => {
const getPatients = "SELECT first_name FROM patients"
  db.query(getPatients, (err, data) => {
    // if i have an error
     if(err) {
      return res.status(400).send("Failed to get patients", err)
    }
    res.status(200).send(data)
   })
})

// Question 4 goes here
//retrieve all providers by thier specialty 
app.get('', (req, res) => {
  const getProviders = "SELECT provider_specialty FROM providers"
  db.query(getProviders, (err, data) => {
    // if i have an error
    if(err) {
      return res.status(400).send("Failed to get providers", err)
    }
    res.status(200).send(data)
  })
})

// listen to the server
app.listen(3000, () => {
  console.log('server is running on port 3000....')
})
  