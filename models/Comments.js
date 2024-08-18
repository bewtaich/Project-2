const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comments extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Comments.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'BlogPosts',
        key: 'id',
      },
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
    modelName: 'Comments', //This is how the model will be spelled in the database.
  }
);

module.exports = Comments;