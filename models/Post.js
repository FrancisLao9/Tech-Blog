const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}
//Setting up Post model
Post.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING
    },
    {
        sequelize
    }
);

module.exports = Post;