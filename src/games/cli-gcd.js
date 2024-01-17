import randomNumber from '../randomNumber.js';
import processGame from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';
const gcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};
const generateRounds = () => {
  const num1 = randomNumber(1, 10);
  const num2 = randomNumber(1, 10);

  const question = `${num1} ${num2}`;
  const correctAnswer = `${gcd(num1, num2)}`;
  return [question, correctAnswer];
};
const brainCalcGame = () => processGame(gameRules, generateRounds);

export default brainCalcGame;
