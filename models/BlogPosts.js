const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class BlogPosts extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

BlogPosts.init(
  {
    title:{
      type:DataTypes.STRING,
      allowNull:false
    },
    body:{
      type:DataTypes.STRING,
      allowNull:false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  // {
  //   hooks: {
  //     beforeCreate: async (newUserData) => {
  //       newUserData.password = await bcrypt.hash(newUserData.password, 10);
  //       return newUserData;
  //     },
  //   },{
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'BlogPosts',
  }
);

module.exports = BlogPosts;