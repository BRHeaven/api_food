export const responseSuccess = ( code = 200, message = "Test Success", data = null) => {
    if (typeof code !== `number`) code = 200;
    return {
        status : `Success`,
        code,
        message,
        metaData : data,
        docs: `Success`,
    };
};
export const responseError = (code = 500, message = `Internal Server Error`, stack = null) => {
    if (typeof code !== `number`) code = 500;
    return {
        status : `Error`,
        code,
        message,
        stack,
    };
};