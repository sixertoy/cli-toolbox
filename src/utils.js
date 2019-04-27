const readline = require('readline');

const askQuestion = (question, defaultvalue = 'N') => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve =>
    rl.question(question, answer => {
      rl.close();
      resolve(answer || defaultvalue);
    })
  );
};

const parseCommandArguments = () => {
  const commandArgs = process.argv;
  return commandArgs.slice(2);
};

module.exports = {
  askQuestion,
  parseCommandArguments,
};
