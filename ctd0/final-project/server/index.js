const express = require('express');
const app = express();

const registerRouter = require('./routes/registerRoute');
const loginRouter = require('./routes/loginRoute');
const logoutRouter = require('./routes/logoutRoute');
const mongoose = require('mongoose');
const cookies = require('cookie-parser');
const checkTokenRouter = require('./routes/checkTokenRoute');
const taskMangerRouter = require('./routes/taskmangerRoute');
const cors = require('cors');
app.listen(3000, () => {
  console.log('Server is running on port 3000');
  
});
const corsOptions = {
  origin: 'http://localhost:4200',
  credentials: true, 
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookies());



app.use('/api/register',registerRouter);
app.use('/api/login',loginRouter);
app.use('/api/logout',logoutRouter);
app.use('/api/check-token',checkTokenRouter);
app.use('/api/task',taskMangerRouter)
mongoose.connect('mongodb://localhost:27017/admin');
