'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "spaces",
            [
                {
                    title: "test 1 title",
                    description: "it is a space description for test",
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    userId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "test 2 title",
                    description: "it is a space description for 2 test",
                    backgroundColor: "#ba5757",
                    color: "##c6adad",
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }
            ]
        )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("spaces", null, {});
    }
};
