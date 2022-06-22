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


//npx sequelize-cli model:generate --name space --attributes title:string,description:text,backgroundColor:string,color:string


//id              | Integer   | yes      | Already added by model:generate                                     |
// | title           | String    | yes      |                                                                     |
// | description     | Text      | no       |                                                                     |
// | backgroundColor | String    | no       | This will always be a hexcode and default should be #ffffff (white) |
// | color           | String    | no       | This will always be a hexcode and default should be #000000 (black) |
// | createdAt       | Date      | yes      | Already added by model:generate                                     |
// | updatedAt       | Date      | yes      | Already added by model:generate                                     |
// | userId          | Integer   | yes      | Foreign key (references a user)                                     |