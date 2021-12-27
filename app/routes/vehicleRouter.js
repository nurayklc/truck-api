const express = require('express')
const vehiclesContoller = require('./../controllers/vehiclesController')
const router = express.Router()

router.route('/vehicle_list').get(vehiclesContoller.getAllVehicle)
router.route('/vehicle_add').post(vehiclesContoller.createVehicle)
router.route('/vehicle_update/:id').patch(vehiclesContoller.updateVehicle)
router.route('/vehicle_delete/:id').delete(vehiclesContoller.deleteVehicle)

module.exports = router