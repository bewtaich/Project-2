const sequelize = require('../config/connection');
const { User } = require('../models');
const { BlogPosts } = require('../models');

const userData = require('./userData.json');
const blogPostData = require('./blogPostsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await BlogPosts.bulkCreate(blogPostData, {
    individualHooks: true,
    returning: true,
  })
  process.exit(0);
};



seedDatabase();
