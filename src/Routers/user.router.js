import express from 'express';
import userController from '../controller/user.controller.js';
const userRouter = express.Router();
userRouter.get(`/like`, userController.like);
userRouter.get(`/reviews`, userController.reviews);
userRouter.get(`/add-review`, userController.addReview);
userRouter.get(`/order`, userController.order);
export default userRouter;