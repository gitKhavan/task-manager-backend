const bcrypt = require('bcrypt')
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
    console.log("controller", email)
    
    try { 
        const user = await User.findByEmail(email);
        if(!user){
            return res.status(400).json({ message: "Invalid email or password"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
       
        if(!isMatch){
            return res.status(400).json({ message: "Invalid email or password"})
        }

        const token = generateToken(user)
        res.status(200).json({
            message: "Login Successfull",
            token,
            user: {id: user.id, email: user.email, username: user.username}
        })
    }
    catch (err){
        console.log(err)
        res.status(500).json({ message: "Server error logging in user"})
    }
}

async function login_get(req, res){
    
}

module.exports = {
    register_post,
    register_get,
    login_post,
    login_get
}