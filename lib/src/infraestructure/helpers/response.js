export const responseHttp = (success = true, data = null, message = null, statusCode = 200) => {
    return {
        statusCode,
        body: JSON.stringify({
            success,
            data,
            message,
        }),
    };
};
//# sourceMappingURL=response.js.map