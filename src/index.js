import readlineSync from 'readline-sync';

const rounds = 3;

const gameProcess = (gameRules, generateRounds) => {
  console.log('Welcone to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  let roundsCount = true;
  for (let i = 0; i !== rounds; i += 1) {
    const [question, correctAnswer] = generateRounds();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      roundsCount = false;
      break;
    } if (userAnswer === correctAnswer) {
      console.log('Correct!');
    }
  } if (roundsCount === true) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default gameProcess;
