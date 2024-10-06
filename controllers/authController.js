const jwt = require("jsonwebtoken");
const userModel = require('../models/userModel');
const { SECRET_KEY } = require('../config'); 

exports.loginUser = (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).json({ message: 'Invalid/Missing username or password' });
    }
    const user = userModel.authenticateUser(username, password);
    if (!user) {
        return res.status(400).json({ message: 'Invalid username or password!' });
    }
    const token = jwt.sign(
        {id: user.id, username: user.username},
         SECRET_KEY,
         {expiresIn: '1h'}   
        
    );

    res.status(200).json({ message: 'Login successful', token, user });

};

exports.getProfile = (req, res) => {
    const userId = req.user.id;
    const users = userModel.loadUsers();
    
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ id: user.id, username: user.username });
    
}
