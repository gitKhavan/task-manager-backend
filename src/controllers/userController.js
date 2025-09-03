const User = require('../models/User')


async function register_post(req, res){
    const {email, username, password} = req.body;

    try {
        const user = await User.create({email, username, password})
        res.status(201).json(user)
    } catch (err){
        console.log(err)
        res.status(400).send("error, user not created")
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