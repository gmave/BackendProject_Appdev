const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const path = './data/users.json';


const loadUsers = () => {
    return JSON.parse(fs.readFileSync(path, 'utf8'));
};

const saveUsers = (users) => {
    fs.writeFileSync(path, JSON.stringify(users, null, 2));
};

exports.loadUsers = loadUsers; 

exports.createUser = (username, password) => {
    let users = loadUsers();
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return { error: 'User already exists!' };
    }
    const newUser = {
        id: uuidv4(),
        username,
        password, 
    };
    users.push(newUser);
    saveUsers(users);
    return newUser;

    
};

exports.authenticateUser = (username, password) => {
    const users = loadUsers();
    return users.find(user => user.username === username && user.password === password);
};

