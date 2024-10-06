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




