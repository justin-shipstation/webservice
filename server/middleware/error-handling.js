const logger = require("../logger");

module.exports = (error, request, response, next) => {
    logger.error({
        resource: request.url,
        method: request.method,
        error: error.message
    });
    response.status(500).send({
        message: error.message,
        customCode: 32242 
    });
    next(error);
};
