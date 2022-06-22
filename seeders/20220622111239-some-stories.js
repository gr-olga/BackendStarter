'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
        "stories",
        [
          {
            name: "funny story",
            content: "it is a rely funny story",
            imageUrl: "https://i.pinimg.com/564x/f1/e1/e3/f1e1e3661755cdd4ea92eaf98894abbb.jpg",
            spaceId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "sed story",
            content: "it is a rely sed story",
            imageUrl: "https://i.pinimg.com/564x/1d/46/f1/1d46f172ce420e7de65bdd8e5a17a707.jpg",
            spaceId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          } ,
          {
            name: "horror story",
            content: "it is a rely scary story",
            imageUrl: "https://i.pinimg.com/564x/ea/9b/2a/ea9b2a3ac0c61c9364d6b00c626f3152.jpg",
            spaceId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "family story",
            content: "it is a rely sweet family story",
            imageUrl: "https://i.pinimg.com/564x/54/23/99/5423994cf1a3eb0e97f12dccaa009ae3.jpg",
            spaceId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          }
        ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("stories", null, {});
  }
};
