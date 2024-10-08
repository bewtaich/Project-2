const router = require('express').Router();
const { BlogPosts } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        console.log(req.body);
        const newBlogPost = await BlogPosts.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        req.session.save(() => {
            req.session.blog_id = newBlogPost.id; //Needed for comments to get access to it.
            res.status(200).json(newBlogPost)
        });
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }

});



// router.delete('/:id', withAuth, async (req, res) => {
//     try {
//       const blogPostData = await BlogPosts.destroy({
//         where: {
//           id: req.params.id,
//           user_id: req.session.user_id,
//         },
//       });

//       if (!blogPostData) {
//         res.status(404).json({ message: 'No BlogPost found with this id!' });
//         return;
//       }

//       res.status(200).json(blogPostData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

module.exports = router;
