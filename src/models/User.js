const db = require("../../database/connect");
const { hashPassword } = require("../../utils/auth")

class User{
    constructor({user_id, email, username, password}){
        this.user_id = user_id;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    static async create(data){
        const {email, username, password} = data;
        const hashedPassword = await hashPassword(password)
        let response = await db.query("INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING *", [email, username, hashedPassword]);
        return new User(response.rows[0]);
    }

    static async findByEmail(email){
        const response = await db.query("SELECT * FROM users where email = $1", [email])
        if (response.rows.length === 0){
            throw new Error("Unable to locate user email")
        }
        return new User(response.rows[0]);

    }

}

module.exports = User;