const bcrypt = require("bcrypt")

const saltRounds = 10;

async function hashPassword(password){
    const salt = await bcrypt.genSalt(saltRounds)
    console.log(salt);
    return await bcrypt.hash(password, salt)
}

module.exports = {
    hashPassword
}