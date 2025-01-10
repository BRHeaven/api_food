import express from 'express';
import restaurantController from '../controller/restaurant.controller.js';
const restaurantRouter = express.Router();
restaurantRouter.get(`/like`, restaurantController.like);
restaurantRouter.get(`/reviews`, restaurantController.reviews);
export default restaurantRouter;