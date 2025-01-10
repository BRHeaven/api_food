import { BadRequestException } from "../common/helper/error.helper.js";
import { prisma } from "../common/helper/prisma.helper.js";

const userService = {
    like : async (req, res, next) => {
        let {id} = req.query;
        if(!parseInt(id)) {
            throw new BadRequestException(`Enter ID as integer`);
        };
        const user = await prisma.users.findFirst({where:{user_id: parseInt(id)}});
        if(!user) {
            throw new BadRequestException(`User does not exist `);
        };
        const list = await prisma.like_res.findMany({where:{user_id : parseInt(id)}});
        return {
            user,
            list,
        };
    },
    reviews : async (req, res, next) => {
        let {id} = req.query;
        if(!parseInt(id)) {
            throw new BadRequestException(`Enter ID as integer`);
        };
        const user = await prisma.users.findFirst({where:{user_id: parseInt(id)}});
        if(!user) {
            throw new BadRequestException(`User does not exist `);
        };
        const list = await prisma.rate_res.findMany({where:{user_id : parseInt(id)}});
        return{
            user,
            list,
        };
    },
    addReview : async (req, res, next) => {
        let {user_id, res_id, review} = req.query;
        if ( !parseInt(user_id) || !parseInt(res_id) || !parseInt(review)) {
            throw new BadRequestException(`Please! enter user_id, res_id and review as integer type`);
        };
        user_id =+ user_id;
        res_id =+ res_id;
        review =+ review;
        const user = await prisma.users.findFirst({where:{user_id:user_id}});
        const restaurant = await prisma.restaurant.findFirst({where:{res_id:res_id}});
        if (!user || !restaurant) {
            throw new BadRequestException(`User or Restaurant does not exist`);
        };
        if(1 > review || review > 5) {
            throw new BadRequestException(`Please! 1 to 5`);
        };
        const newReview = await prisma.rate_res.create({
            data : {
                res_id : restaurant.res_id,
                user_id : user.user_id,
                reviews : review,
            },
        });
        return {
            user : {id : user.user_id,name : user.full_name},
            restaurant : {id : restaurant.res_id,name : restaurant.res_name},
            newReview,
        };
    },
    order : async (req, res, next) => {
        let {user_id, food_id, amount} = req.query;
        user_id =+ user_id;
        food_id =+ food_id;
        amount =+ amount;
        if (!user_id || !food_id || !amount) {
            throw new BadRequestException(`Please! enter user_id, food_id and amount as integer type`);
        };
        const food = await prisma.food.findFirst({where:{food_id: food_id}});
        const user = await prisma.users.findFirst({where:{user_id:user_id}});
        if (!food || !user) {
            throw new BadRequestException(`User or Food does not exist`);
        };
        const order = await prisma.orders.create({
            data: {
                user_id : user.user_id,
                food_id : food.food_id,
                code : food.description,
                arr_sub_id: ``,
                amount,
            },
        });
        return {
            user: {id: user.user_id, name: user.full_name},
            food: {id: food.food_id, name: food.food_name},
            order,
        };
    },
};
export default userService;