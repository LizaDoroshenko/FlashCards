const fs = require('fs').promises;
const path = './questions';
const { Deck, Card } = require('./db/models');

const fun = async () => {

  const dirs = await fs.readdir(path, 'utf-8');
  const deck = await Deck.findAll({ raw: true, attributes: ['id', 'theme'] });
  let result = [];
  console.log(dirs);
  console.log(deck);

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
  console.log(result);
}


fun()