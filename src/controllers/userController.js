const User = require('../models/User')
const { generateToken } = require('../../utils/jwt')


async function register_post(req, res){
    const {email, username, password} = req.body;

    try {
        const user = await User.create({email, username, password})
        const token = generateToken(user);
        res.status(201).json({
            message: "User registered successfully",
            token, 
            user: {id: user.id, email: user.email, username: user.username}
        })
    } catch (err){
        console.log(err)
        res.status(400).send({message: "Error, user not created"})
    }
}

async function register_get(req, res){
    res.send("User registration page");
}

async function login_post(req, res){
    const {email, password} = req.body;
    console.log(email, password);
    res.send("User logged in");
}

async function login_get(req, res){
    res.send("User login page");
}

module.exports = {
    register_post,
    register_get,
    login_post,
    login_get
}