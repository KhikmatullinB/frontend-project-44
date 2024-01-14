#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';

const userName = greetings();
const rounds = 3;
const brainEvenRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
console.log(brainEvenRules);

const numQuestion = () => {
  const tempNumber = randomNumber(1, 10);
  console.log('Question: ', tempNumber);
  return tempNumber;
};

for (let i = 0; i !== rounds; i += 1) {
  const tempNumber = numQuestion();
  const correctAnswer = tempNumber % 2 ? 'no' : 'yes';
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}`);
    break;
  } if (userAnswer === correctAnswer) {
    console.log('Correct!');
  }
} console.log(`Congratulations, ${userName}!`);
