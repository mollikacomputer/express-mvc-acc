const exportsForUser = require('express');
const userController = require('../../Controllar/user.controller');
const userRouter = exportsForUser.Router();

userRouter
.route('/')
.get(userController.getAllUser)
.delete(userController.DeleteAUser)
.put(userController.PutAUser)
.post(userController.AddAUser)


userRouter
.route('/:id/:test').get(userController.getAllUser)
module.exports = userRouter;