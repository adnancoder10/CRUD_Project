const express = require('express')
const AllController = require('../controller/MyController')
const web = express.Router()

web.get('/', AllController.HomePageGetRequestController)
web.post('/', AllController.HomePagePostRequestController)
web.post('/Delete/User/:id', AllController.DeleteUser)
web.get('/Update/User/:id', AllController.UpdateUser)
web.post('/UpdatTheUser/:id', AllController.UpdateUsingByID)


module.exports = web
