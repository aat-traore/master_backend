const router = require('express').Router()
const controller = require("../controllers/UserController");
const Authen = require("../controllers/Auth");
const admin = require('../middleware/VerifyRole');
const bama=require('../middleware/TokenandRole')



router.post('/new_user',controller.signup);
router.post('/login',Authen.auth);
router.get('/users',bama.verifyTokenAndRole,controller.getUsers)
module.exports = router;