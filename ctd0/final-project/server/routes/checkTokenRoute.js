const router = require('express').Router();
const checkTokenController = require('../controllers/checkTokenController');


router.route('/')
    .get(checkTokenController.checkToken);

module.exports = router;