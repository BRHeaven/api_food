import { responseSuccess } from "../common/helper/response.helper.js";
import restaurantService from "../service/restaurant.service.js";

const restaurantController = {
    like : async (req, res, next) => {
        try {
            const data = await restaurantService.like(req);
            const resData = responseSuccess(200,`Get list success`, data);
            res.status(resData.code).json(resData);
        } catch (error) {
            next(error);
        }
    },
    reviews: async (req, res, next) => {
        try {
            const data = await restaurantService.reviews(req);
            const resData = responseSuccess(200,`Get list success`, data);
            res.status(resData.code).json(resData);
        } catch (error) {
            next(error);
        }
    }
};
export default restaurantController;