const express = require('express');
const toolsController = require('../../Controllar/tools.controller');
const router = express.Router();

router
.route('/')
.get(toolsController.getAllTools)
.post(toolsController.AddATools)
.delete(toolsController.DeleteATools)
.put(toolsController.PutATools);

module.exports = router;