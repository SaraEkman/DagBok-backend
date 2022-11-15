const express = require('express');
const router = express.Router();
// const PostModel = require('../modules/post_model');
const UserModel = require('../modules/user_model');
const cors = require('cors');
router.use(cors());

router.get('/', async (req, res) => {
    const users = await UserModel.find();
    res.status(200).json(users);
});

router.post('/', async (req, res) => {
    const user = await UserModel.create(req.body);
    res.status(200).json({ 'status': 'ok' });
});

module.exports = router;