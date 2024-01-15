import randomNumber from '../randomNumber.js';
import gameProcess from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRounds = () => {
  const tempNumber = randomNumber(1, 10);
  const question = `${tempNumber}`;
  const correctAnswer = isEven(tempNumber) ? 'yes' : 'no';
  return [correctAnswer, question];
};
const brainEvenGame = () => gameProcess(gameRules, generateRounds);

export default brainEvenGame;