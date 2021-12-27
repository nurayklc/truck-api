const express = require('express')
const devicesContoller = require('./../controllers/devicesController')
const router = express.Router()

router.route('/device_list').get(devicesContoller.getAllDevices)
router.route('/device_add').post(devicesContoller.createDevice)
router.route('/device_update/:id').patch(devicesContoller.updateDevices)
router.route('/device_delete/:id').delete(devicesContoller.deleteDevices)

module.exports = router