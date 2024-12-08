const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
let loginUser = async (req, res) => {
    const userData = await req.body;
    try {
        console.log(userData);
        const user = await User.findOne({ email: userData.email });
        if (!user) {
            return res.json({ "msg": "User not found" });
        }
        const isPasswordValid = await bcrypt.compare(userData.password, user.password);
        if (!isPasswordValid) {
            return res.json({ "msg": "Invalid password" });
        } else {
            const token = await jwt.sign(
                { userID : user._id, name: user.name},
                process.env.JWT_KEY,
                { expiresIn: "1h" }
            );
            await res.cookie("jwt", token, 
            {
                httpOnly: true,
            }
        );
            res.json( { "msg" : "Login successful"});
        }
    } catch (err) {
        return res.json({ "msg": "Server error" + err});
    }
};

let getUserData = async (req, res) => {
    try {
        const user = await User.findById(req.user.userID);
        if (!user) {
            return res.json({ message: "Could not find user" });
        }
        return res.json(user.tasks);
    } catch (err) {
        return res.json({ "msg": "Error Getting Tasks "});
    }
}

module.exports = {loginUser, getUserData};
