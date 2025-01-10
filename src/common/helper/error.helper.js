import { responseError } from "./response.helper.js";

export const middlewareError = (err, req, res, next) => {
    console.log("middleware last");
    const resData = responseError(err.code, err.message, err.stack);
    res.status(resData.code).json(resData);
};
export class BadRequestException extends Error {
    constructor(message = `BadRequestException`) {
        super(message);
        this.code = 400;
    };
};
export class UnauthorizationException extends Error {
    constructor(message = `UnauthorizationException`) {
       super(message);
       this.code = 401;
    };
};
export class ForbiddenException extends Error {
    constructor(message = `ForbiddenException`) {
        super(message);
        this.code = 403;
    };
};