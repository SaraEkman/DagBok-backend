const express = require('express');
const router = express.Router();
const PostModel = require('../modules/post_model');
const cors = require('cors')
router.use(cors())


router.get('/', async (req, res) => {
    const posts = await PostModel.find();
    res.status(200).json(posts);
});

router.post('/', async (req, res) => {
    const post = await PostModel.create(req.body);
    res.status(200).json({ 'status': 'ok' });
});

router.put('/', async (req, res) => {
    const { _id, title, content } = req.body;
    const post = await PostModel.findById({ _id });
    post.title = title;
    post.content = content;

    await post.save();

    res.status(200).json({ 'status': 'ok' });
});

router.delete('/', async (req, res) => {

    const { _id } = req.body;
   
    await PostModel.findByIdAndDelete({ _id });
    res.status(200).json({ 'status': 'Product successfully deleted' });
});

module.exports = router;