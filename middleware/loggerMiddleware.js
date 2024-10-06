const fs = require('fs');
const path = require('path');
const logFilePath = path.join(__dirname, '../data/requests.log');

const loggerMiddleware = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const route = req.url;
    const log = `[${timestamp}] ${method} request to ${route}\n`;
    //console.log(log.trim());
    //adds to log file
    fs.appendFile(logFilePath, log, (err) => {
        if (err) {
            console.error('Failed to write to log file:', err);
        }
    });
    next();
};

module.exports = loggerMiddleware; 