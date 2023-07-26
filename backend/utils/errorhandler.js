class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message); //Access message from Error(parent class)
        this.statusCode = statusCode;

        Error.captureStackTrace(this,this.constructor);
    }
}

module.exports = ErrorHandler;