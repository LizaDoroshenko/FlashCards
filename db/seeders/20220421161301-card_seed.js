const fs = require('fs').promises;
const { Deck, Card } = require('../models');


const path = './questions';

module.exports = {
  async up (queryInterface, Sequelize) {
    const dirs = await fs.readdir(path, 'utf-8');
    const deck = await Deck.findAll({ raw: true, attributes: ['id', 'theme'] });
    let result = [];

    for (let i = 0; i < deck.length; i++) {

      // check id
      if (deck[i].theme + '.txt' === dirs[i]) {

        // fs.readFile
        let quest = await fs.readFile(`${path}/${dirs[i]}`, 'utf-8');
        let temp = quest.split('\n');

        for (let j = 0; j < temp.length; j++) {
          let obj = {};

          // copy id
          obj.deck_id = deck[i].id;

          if (j % 2 === 0 && temp[j] !== '') {
            //copy other keys
            obj.question = temp[j];
            obj.answer = temp[j + 1];

            obj.createdAt = new Date()
            obj.updatedAt = new Date()

            result.push(obj);
          }
        }
      }
    }

    await queryInterface.bulkInsert('Cards', result, {});
  },

  async down (queryInterface) {
    // await queryInterface.bulkDelete('Cards', null, {});
  },
};
