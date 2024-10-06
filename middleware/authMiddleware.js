const { SECRET_KEY } = require('../config'); 
const jwt = require ('jsonwebtoken');


exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
    const bearerToken = token.split(' ')[1];

    jwt.verify(bearerToken, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token.' });
        }
        req.user = decoded;
        next(); 
    });

};
