const express = require('express');
const app = express();
const PORT = 3000;

const mongoose = require('mongoose');
const postRouter = require('./routes/post-route');
const userRouter = require('./routes/user-route');
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use('/post', postRouter);
app.use('/user', userRouter);

const initAtlas = async () => {
    try {
        await mongoose.connect('mongodb+srv://sara:hel9514@mycluster.7osmm.mongodb.net/?retryWrites=true&w=majority');
        console.log('connected to database');
    } catch (err) { console.error('error', err); }
    app.listen(PORT, () => console.log(`Server is up and running on port: ${PORT}`));
};
initAtlas()
