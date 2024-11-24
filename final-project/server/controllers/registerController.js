const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv').config();
let registerUser = async (req, res) => {
    let user = req.body;
    try {
        let hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        await User.create(user); 
        res.json({"msg" : 'User created successfully'});
    } catch (err) {
        res.json({ "msg" : 'Error creating user' + err });
    }
};

module.exports = registerUser;

