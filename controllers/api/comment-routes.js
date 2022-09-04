const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', (req, res) => {
    Comment.findAll()
        .then(result => res.json(result))
        .catch(err => {
            console.log(err);
            res.json(err)
        })

});

router.post('/', (req, res) => {

    //for testing locally
    // Comment.create({
    //     comment_text: req.body.comment_text,
    //     // user_id: req.session.user_id,
    //     user_id: req.body.user_id,
    //     post_id: req.body.post_id
    //   })
    //     .then(dbCommentData => res.json(dbCommentData))
    //     .catch(err => {
    //       console.log(err);
    //       res.status(400).json(err);
    //     });

    if (req.session) {
        Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        post_id: req.body.post_id,
        
      })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    }


});

router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {id: req.params.id}
    })
        .then(result => {
            if (!result) {
                res.status(404).json({ message: "Not found" });
                return;
            }
            res.json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    })
});

module.exports = router;
