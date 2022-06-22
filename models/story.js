'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class story extends Model {
        static associate(models) {
            story.belongsTo(models.space)
        }
    }

    story.init({
        name: {type: DataTypes.STRING, allowNull: false},
        content: DataTypes.TEXT,
        imageUrl: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'story',
    });
    return story;
};