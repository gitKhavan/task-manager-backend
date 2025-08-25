async function register_post(req, res){
    const {email, password} = req.body;
    console.log(email, password);


    res.send("User registered");
    

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