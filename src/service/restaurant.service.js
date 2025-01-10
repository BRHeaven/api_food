import { BadRequestException } from "../common/helper/error.helper.js";
import { prisma } from "../common/helper/prisma.helper.js";

const restaurantService = {
    like : async (req, res, next) => {
        const id =  parseInt(req.query.res_id);
        const restaurant = await prisma.restaurant.findFirst({where:{res_id : id}});
        if (!restaurant) {
            throw new BadRequestException(`Restaurant ID entered incorrectly or not entered`);
        };
        const list = await prisma.like_res.findMany({where:{res_id : restaurant.res_id}});
        return {
            list,
        };
    },
    reviews: async (req, res, next) =>{
        const id =  parseInt(req.query.res_id);
        const restaurant = await prisma.restaurant.findFirst({where:{res_id : id}});
        if (!restaurant) {
            throw new BadRequestException(`Restaurant ID entered incorrectly or not entered`);
        };
        const list = await prisma.rate_res.findMany({where:{res_id: restaurant.res_id}});
        return {
            list,
        };
    },
};
export default restaurantService;