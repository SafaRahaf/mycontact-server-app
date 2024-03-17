const { constants } = require('../constants')

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({title: "validation Failed", message: err.message, statusCode: err.statusCode})
            break;
        case constants.NOT_FOUND:
            res.json({title: "Not Found", message: err.message, statusCode: err.statusCode})

        case constants.UNEUTHORIZED:
            res.json({title: "Un Authorized", message: err.message, statusCode: err.statusCode})

        case constants.FORBIDDEN:
            res.json({title: "Forbidden", message: err.message, statusCode: err.statusCode})
           
        case constants.SERVER:
            res.json({title: "server error", message: err.message, statusCode: err.statusCode})
           
    
        default:
            console.log('No error, all good !');
    }
}

module.exports = errorHandler