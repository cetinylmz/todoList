const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()


router.route('/getUsers').get(userController.getUsers)
router.route('/crateUser').post(userController.crateUser)
router.route('/deleteUsers').post(userController.deleteUsers)
router.route('/updateUsers').post(userController.updateUsers)


module.exports = router