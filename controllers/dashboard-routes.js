const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

//Getting post-data but only when user is logged in
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                userId: req.session.userId
            }
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('all-posts', {
            layout: 'dashboard',
            posts
        });
    } catch (err) {
        res.redirect('login');
    }
});

//Creating new posts
router.get('/new', withAuth, (req, res) => {
    res.render('new-post', {
        layout: 'dashboard'
    });
});

//Allowing edits only when logged in
router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);

        if (postData) {
            const post = postData.get({ plain: true });

            res.render('edit-post', {
                layout: 'dashboard',
                post
            });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.redirect('login');
    }
});

module.exports = router;