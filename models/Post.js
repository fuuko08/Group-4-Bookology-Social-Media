const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

    Post.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            content: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: { notEmpty: true }
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: { notEmpty: true }
            },
            userId: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'user',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'post',
        }
    );

module.exports = Post;