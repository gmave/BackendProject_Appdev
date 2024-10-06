
const express = require('express');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/authRoutes');
const loggerMiddleware = require('./middleware/loggerMiddleware'); 

const app = express();
app.use(express.json());
app.use(loggerMiddleware);

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

