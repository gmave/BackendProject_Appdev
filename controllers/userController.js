const userModel = require('../models/userModel');


exports.registerUser = (req, res) => {
   // console.log("Received request body:", req.body); 
    const { username, password} = req.body;
    //checker
    if (!username || !password) {
        return res.status(400).json({ message: 'Both username and password are required.' });
    }
    //If passed checker, do this
    const result = userModel.createUser(username, password);
    if (result.error) {
        return res.status(400).json({ message: result.error });
    }
    res.status(201).json({ message: 'User registered successfully' });
};


exports.loginUser = (req, res) => {
    const { username, password } = req.body;
    const user = userModel.authenticateUser(username, password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    res.status(200).json({ message: 'Login successful', user });
};

// Profile update 
/*exports.updateUserProfile = (req, res) => {
    const { username, profile } = req.body;
    const result = userModel.updateProfile(username, profile);
    if (result.error) {
        return res.status(404).json({ message: result.error });
    }
    res.status(200).json({ message: 'Profile updated successfully' });
};*/
