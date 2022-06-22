"use strict";

const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        static associate(models) {
            user.hasOne(models.space)
        }
    }

    user.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "user",
        }
    );
    return user;
};


//npx sequelize-cli model:generate --name story --attributes name:string,content:text,imageUrl:string

