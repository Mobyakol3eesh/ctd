const router = require('express').Router();
const logoutController = require('../controllers/logoutController');
const auth = require('../middleware/auth');


router.route('/')
    .get(auth.authentecationToken,logoutController.logout);

module.exports = router;