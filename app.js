const express = require("express");
require('dotenv').config({ path: __dirname+'/.env' })
const pg = require('./app/adapters/database')
const vehicleRouter = require('./app/routes/vehicleRouter')
const deviceRouter = require('./app/routes/deviceRouter')
const deviceTypeRouter = require('./app/routes/deviceTypeRouter')
const logTemperatureRouter = require('./app/routes/logTemperatureRouter')
const logLocationRouter = require('./app/routes/logLocationRouter')
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

// Routes
app.use('/vehicle', vehicleRouter)
app.use('/device', deviceRouter)
app.use('/device_type', deviceTypeRouter)
app.use('/log_temperature', logTemperatureRouter)
app.use('/log_location', logLocationRouter)

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server starting on ${port}`);
});
