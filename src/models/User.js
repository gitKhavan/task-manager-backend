const db = require("../../database/connect");

class User{
    constructor({user_id, email, password}){
        this.user_id = user_id;
        this.email = email;
        this.password = password;
    }

    static async create(data){
        const {email, password} = data;
        let response = await db.query("INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *", [email, password]);
        return new User(response.rows[0]);
    }

    

}

module.exports = User;