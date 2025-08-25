const { Router } = require("express");
const userController = require("../controllers/userController");
const authenticator = require("../middleware/authMiddleware")

const router = Router();

router.post("/register", userController.register_post);
router.get("/register", userController.register_get);
router.post("/login", userController.login_post);
router.get("/login", userController.login_get);

module.exports = router;