const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
const { BlogPosts } = require('../models')

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const blogPosts = await BlogPosts.findAll({
    });

    const posts = blogPosts.map((post) => post.get({ plain: true }));//making database data useful for front end. 

    res.render('homepage', {
      posts, //making data available to use in handlebars homepage file. 

      // Pass the logged in flag to the template
      logged_in: req.session.logged_in, //giving to handlebars the user's logged in status. 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;