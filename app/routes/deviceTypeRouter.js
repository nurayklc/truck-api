const express = require('express')
const deviceTypeController = require('./../controllers/deviceTypeController')
const router = express.Router()

router.route('/type_list').get(deviceTypeController.getAllDeviceType)
router.route('/type_add').post(deviceTypeController.createDeviceType)
router.route('/device_delete/:id').delete(deviceTypeController.deleteDeviceType)


module.exports = router