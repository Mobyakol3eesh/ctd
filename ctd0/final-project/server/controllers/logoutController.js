


let logout =  (req, res) => {
    res.cookie('jwt', '', { expires: new Date(0), httpOnly: true,});
    return res.json({ msg: 'Logged out successfully.' });
};

module.exports = {logout}