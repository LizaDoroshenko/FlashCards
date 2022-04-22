const fs = require('fs').promises;

const readFile = async (path) => { 
  const question = await fs.readFile(path, 'utf-8');
  console.log(question)

  const arrayOfQuestions = question.split('\n');
  console.log(arrayOfQuestions);
  const objOfQuestions = {};
  const arrOfObjects = [];
  for (let i = 0; i < arrayOfQuestions.length; i++) { 
    objOfQuestions.question = arrayOfQuestions[i];
    objOfQuestions.answer = arrayOfQuestions[i + 1];
  }
  console.log(objOfQuestions);
}

readFile('./questions/Кошки.txt');
