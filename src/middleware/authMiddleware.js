const jwt = require("jsonwebtoken")
const { verifyToken } = require("../../utils/jwt")
const JWT_SECRET = process.env.JWT_SECRET

function authenticate(req, res, next){
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({ message: "No token provided"})
    }
    
    const token = authHeader.split("")[1]

    try {
        const decoded = verifyToken(token)
        req.user = decoded
        next()
    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token"})
    }
}

module.exports = authenticate;