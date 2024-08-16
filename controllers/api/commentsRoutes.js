const router = require('express').Router();
const { User } = require('../../models');
const { BlogPosts } = require('../../models');
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body);
    const newComment = await Comments.create({
      ...req.body, 
      user_id: req.session.user_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err)
  }
  
});

router.get('/comment', withAuth, async (req,res) => {
  try {
    const commentData = await BlogPosts.findByPk(req.session.blog_id, {
      include: [{model: Comments}, {model: User}],
    });


    const comments = commentData.get({plain: true});
    console.log(comments);
    res.render('comment', {
      ...comments,
      logged_in:req.session.logged_in
    });
  } catch (err){
    res.status(500).json(err);
  }
})

module.exports = router;
