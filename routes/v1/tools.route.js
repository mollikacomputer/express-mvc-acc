const express = require('express');
const toolsController = require('../../Controllar/tools.controller');
const router = express.Router();

router
.route('/')
.get(toolsController.getAllTools)
.post(toolsController.AddATools)
.delete(toolsController.DeleteATools)
.put(toolsController.PutATools);

router.route('/:id/:test').get(toolsController.getAllTools);

module.exports = router;