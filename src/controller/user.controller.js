import { responseSuccess } from "../common/helper/response.helper.js";
import userService from "../service/user.service.js";

const userController = {
    like : async (req, res, next) => {
        try {
            const data = await userService.like(req);
            const resData = responseSuccess(200,`Get list success`, data);
            res.status(resData.code).json(resData);
        } catch (error) {
            next(error);
        };
    },
    reviews: async (req, res, next) => {
        try {
            const data = await userService.reviews(req);
            const resData = responseSuccess(200,`Get list success`, data);
            res.status(resData.code).json(resData);
        } catch (error) {
            next(error);
        };
    },
    addReview: async (req, res, next) => {
        try {
            const data = await userService.addReview(req);
            const resData = responseSuccess(200,`Add success`, data);
            res.status(resData.code).json(resData);
        } catch (error) {
            
            next(error);
        };
    },
    order: async (req, res, next) => {
        try {
            const data = await userService.order(req);
            const resData = responseSuccess(200,`Order success`, data);
            res.status(resData.code).json(resData);
        } catch (error) {
            next(error);
        };
    },
};
export default userController;