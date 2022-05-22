const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
let host = '0.0.0.0';

const mongoose = require('mongoose');
const postRouter = require('./routes/post-route');
const userRouter = require('./routes/user-route');
const cors = require('cors')

app.use(cors({
    "origin": "http://127.0.0.1:5500/Dagbok/index.html",
    "methods": ["GET", "POST", "PUT", "DELETE"]
}))
app.use(express.json());
app.use('/post', postRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send('Välkommen')
})

const initAtlas = async () => {
    try {
        await mongoose.connect('mongodb+srv://sara:hel9514@mycluster.7osmm.mongodb.net/?retryWrites=true&w=majority');
        console.log('connected to database');
    } catch (err) { console.error('error', err); }
    app.listen(PORT, host, () => console.log(`Server is up and running on port: ${PORT}`));
};
initAtlas()
