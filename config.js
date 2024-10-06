require('dotenv').config(); 
//authentication 
const SECRET_KEY = process.env.SECRET_KEY || 'default_secret_key'; 
module.exports = {
    SECRET_KEY,
};