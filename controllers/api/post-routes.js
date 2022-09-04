const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');

//get all users
router.get('/', (req, res) => {
    console.log('=====================');
    Post.findAll({
        //query config
        attributes: ['id',
            'post_text',
            'title',
            'created_at',
            
        ],
        order: [['created_at', 'DESC']],
        include: [{
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
              model: User,
              attributes: ['username']
            }
        },
            {
            model: User,
            attributes: ['username']
        }]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    })
})

//find one
router.get('/:id', (req, res) => {
    console.log('=====================');
    Post.findOne({
        //query config
        where: {id: req.params.id},
        attributes: ['id', 'post_text', 'title', 'created_at'],
        include: [{
            model: User,
            attributes: ['username']
        }]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    })
})

//create post
router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        post_text: req.body.post_text,
        // user_id: req.body.user_id
        user_id: req.session.user_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    })
})

router.put('/:id', (req, res) => {
    Post.update({
        post_title: req.body.title,
        post_text: req.body.post_text
    },
        {
            where: { id: req.params.id }
        }
    )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.delete('/:id', (req, res) => {
    Post.destroy({
        where: { id: req.params.id }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' })
                return;
            }
            res.json(dbPostData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    })
})


module.exports = router;