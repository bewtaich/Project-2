const User = require('./User');
const BlogPosts = require('./BlogPosts');
const Comments = require('./Comments');

User.hasMany(BlogPosts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
User.hasMany(BlogPosts, {
    foreignKey: 'author_username',
    onDelete:'CASCADE'
});

BlogPosts.belongsTo(User, {
  as: 'author',
  foreignKey: 'author_username'
});

BlogPosts.belongsTo(User, {
    as: 'identification',
    foreignKey: 'user_id',
  });
  
  BlogPosts.hasMany(Comments, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE',
  });

  Comments.belongsTo(BlogPosts, {
    foreignKey: 'blog_id'
  })

  module.exports = { User, BlogPosts, Comments };