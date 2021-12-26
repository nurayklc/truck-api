const express = require("express");
require('dotenv').config({ path: __dirname+'/.env' })
const pg = require('./app/adapters/database')
const vehiclesContoller = require('./app/controllers/vehiclesController')
const devicesController = require('./app/controllers/devicesController')
const deviceTypeController = require('./app/controllers/deviceTypeController')
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get('/vehicle_list', vehiclesContoller.getAllVehicle)
app.post('/vehicle_add', vehiclesContoller.createVehicle)
app.patch('/vehicle_update/:id', vehiclesContoller.updateVehicle)
app.delete('/vehicle_delete/:id', vehiclesContoller.deleteVehicle)

app.get('/device_list', devicesController.getAllDevices)
app.post('/device_add', devicesController.createDevice)
app.patch('/device_update/:id', devicesController.updateDevices)
app.delete('/device_delete/:id', devicesController.deleteDevices)

app.get('/type_list', deviceTypeController.getAllDeviceType)
app.post('/type_add', deviceTypeController.createDeviceType)
app.delete('/device_delete/:id', deviceTypeController.deleteDeviceType)

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server starting on ${port}`);
});
