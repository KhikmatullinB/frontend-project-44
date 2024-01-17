import randomNumber from '../randomNumber.js';
import processGame from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRounds = () => {
  const tempNumber = randomNumber(1, 10);
  const question = `${tempNumber}`;
  const correctAnswer = isEven(tempNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const brainEvenGame = () => processGame(gameRules, generateRounds);

export default brainEvenGame;
