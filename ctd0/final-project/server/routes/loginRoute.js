const router = require('express').Router();
const loginController = require('../controllers/loginController');
const auth = require('../middleware/auth');

router.route('/')
    .post(loginController.loginUser)
    .get(auth.authentecationToken,loginController.getUserData);

module.exports = router;