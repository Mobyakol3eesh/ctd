const router = require('express').Router();
const registerUser = require('../controllers/registerController');
const loginUser = require('../controllers/loginController');

router.route('/')
    .post(registerUser);

module.exports = router;
