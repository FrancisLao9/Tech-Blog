const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//Setting up Post relationships
Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});
Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

//Comment Relationships
Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = {User, Comment, Post};