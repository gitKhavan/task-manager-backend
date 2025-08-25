const db = require("../../database/connect");

class User{
    constructor({user_id, email, password}){
        this.user_id = user_id;
        this.email = email;
        this.password = password;
    }

    

}

module.exports = User;