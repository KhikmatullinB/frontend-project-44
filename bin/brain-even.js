#!/usr/bin/env node
import readlineSync from 'readline-sync';

const rounds = 3;
const brainEvenRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const evenNum = randomNumber % 2 === 0;
const correctAnswer = evenNum ? 'yes' : 'no';
console.log(brainEvenRules);
const numQuestion = () => {
    console.log('Question:' randomNumber(1, 100));
};
const userAnswer = readlineSync.question('Your answer: ');
for (let i = 0; i <= rounds; i += 1) {
    if (userAnswer !== correctAnswer) {
        console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.`);
        return console.log(`Let's try again, ${userName}`);
    }
    return console.log('Correct!');
    }
    return console.log(`Congratulations, ${userName}!`)
