const { validationResult, matchedData } = require("express-validator");

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        console.log("Validation errors:", errors.array())
        return res.status(400).json({ errors: errors.array()})
    }

    const data = matchedData(req)
    console.log(data)
    
    next()
}

module.exports = validate;
