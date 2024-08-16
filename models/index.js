const User = require('./User');
const BlogPosts = require('./BlogPosts');
const Comments = require('./Comments');

User.hasMany(BlogPosts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });


BlogPosts.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
  BlogPosts.hasMany(Comments, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE',
  });

  Comments.belongsTo(BlogPosts, {
    foreignKey: 'blog_id'
  })

  User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  })

  Comments.belongsTo(User, {
    foreignKey: 'user_id',
  })

  module.exports = { User, BlogPosts, Comments };