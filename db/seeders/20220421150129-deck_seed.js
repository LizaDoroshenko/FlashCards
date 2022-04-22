'use strict';
const fs = require('fs').promises;

// async function readFileTheme() {
//   let readTheme = await fs.readdir('./question')
//   let arr = []
//   for (let i=0; i<readTheme.length; i++) {
//   arr.push(readTheme[i].slice(0,-4))
//   }
//   console.log(arr[1])
// }
// readFileTheme()

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let readTheme = await fs.readdir('./question')
    let arr = []
    for (let i = 0; i < readTheme.length; i++) {
      arr.push(readTheme[i].slice(0, -4))

      await queryInterface.bulkInsert('Decks', [{
        theme: arr[i],
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
