import randomNumber from '../randomNumber.js';
import gameProcess from '../index.js';

const gameRules = 'What number is missing in the progression?';

const generateProgression = (firstItem, step, length) => {
  const array = [];
  for (let i = 0; i < length; i += 1) {
    const result = (firstItem + (step * i));
    array.push(result);
  }
  return array;
};
function generateRounds() {
  const first = randomNumber(1, 10);
  const step = randomNumber(1, 10);
  const length = randomNumber(5, 10);
  const progression = generateProgression(first, step, length);
  const randIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = `${progression[randIndex]}`;
  progression[randIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
}

const progressionGame = () => gameProcess(gameRules, generateRounds);

export default progressionGame;
