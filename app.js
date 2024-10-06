
const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});