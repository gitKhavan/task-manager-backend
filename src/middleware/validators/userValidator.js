const { body } = require("express-validator")

function registerValidator() {
    return  [
            //Validate user input on server side using express-validator
            body('username').notEmpty().withMessage('Username is required'),
            body('email').isEmail().withMessage('Please provide a valid email'),
            body('password').isLength({ min: 6}).withMessage('Password must be at least 6 characters.')
        ]

}

module.exports = {
    registerValidator
}