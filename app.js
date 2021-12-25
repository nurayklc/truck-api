const express = require("express");
require('dotenv').config({ path: __dirname+'/.env' })
const pg = require('./app/adapters/database')
const vehiclesContoller = require('./app/controllers/vehiclesController')
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post('/vehicle_add', vehiclesContoller.createVehicle)


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server starting on ${port}`);
});
