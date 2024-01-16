import randomNumber from '../randomNumber.js';
import gameProcess from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

function generateRounds() {
  const number = randomNumber(1, 10);
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
}
const primeGame = () => gameProcess(gameRules, generateRounds);

export default primeGame;
