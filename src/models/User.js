const db = require("../../database/connect");

class User{
    constructor({user_id, email, username, password}){
        this.user_id = user_id;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    static async create(data){
        const {email, username, password} = data;
        let response = await db.query("INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING *", [email, username, password]);
        return new User(response.rows[0]);
    }

    

}

module.exports = User;