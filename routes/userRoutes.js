import express from 'express'
import {registerUser,loginUser,quenmk,verifyCodeAndResetPassword,changePassword,listUser,removeUser,updateUser,getUserInfo,updateUserRole} from '../controllers/userController.js'
import authMiddleware from '../middleware/auth.js'

const userRouter=express.Router()
userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/quenmk', quenmk);
userRouter.post('/verify-code-and-reset-password', verifyCodeAndResetPassword);
userRouter.post('/changepassword',authMiddleware, changePassword);
userRouter.get('/list',listUser)
userRouter.post('/remove',removeUser)
userRouter.get('/:id', getUserInfo);
userRouter.put('/update/:id', updateUser);
userRouter.post('/:id/role', updateUserRole);

export default userRouter;