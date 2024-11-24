const taskMangerController = require('../controllers/taskmangerController');  
const auth = require('../middleware/auth');

const router = require('express').Router();


router.route('/:index')
    .delete(auth.authentecationToken,taskMangerController.deleteTask)
    .patch(auth.authentecationToken,taskMangerController.updateTask)

router.route('/')
    .post(auth.authentecationToken,taskMangerController.addTask)
module.exports = router;