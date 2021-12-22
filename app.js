const express = require("express");
require('dotenv').config({ path: __dirname+'/.env' })
const pg = require('./adapters/database')
const vehiclesContoller = require('./controllers/vehiclesController')
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post('/vehicles', vehiclesContoller.createVehicle)
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server starting on ${port}`);
});
