import gameProcess from '../index.js';
import randomNumber from '../randomNumber.js';

const gameRules = 'What is the result of the expression?';
const operands = ['+', '-', '*'];

const expression = (num1, operand, num2) => {
  switch (operand) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};
const generateRounds = () => {
  const num1 = randomNumber(1, 10);
  const num2 = randomNumber(1, 10);
  const randomOperand = operands[randomNumber(0, operands.length - 1)];
  const question = `${num1} ${randomOperand} ${num2}`;
  const correctAnswer = `${expression(num1, randomOperand, num2)}`;
  return [question, correctAnswer];
};
const brainCalcGame = () => gameProcess(gameRules, generateRounds);

export default brainCalcGame;
