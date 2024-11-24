const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();


const checkToken = async (req, res) => {

    const token = await req.cookies.jwt;
    const jwtKey = process.env.JWT_KEY;
    console.log(token);
    if (!token) {
        return res.json({"message" : "Unauthorized Token is Not Found", "value" : false});
    }
    try {
        await jwt.verify(token,jwtKey);
        res.json({"message" : "Authorized" , "value" : true});
    }
    catch(err) {
        return res.json({"message" : "Expire or Invalid token" , "value" : false});
    }
};

module.exports = {checkToken};