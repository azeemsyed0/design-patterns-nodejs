const conductor = require('./conductor');
const { ExitCommand, CreateCommand } = require('./commands');
const { createInterface }  = require('readline');
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('create <fileName> <text> | history | undo | redo | exit');
rl.prompt();

const commands = {
  HISTORY: 'history',
  UNDO: 'undo',
  REDO: 'redo',
  EXIT: 'exit',
  CREATE: 'create'
};

rl.on('line', input => {
  const [ commandText, ...remaining ] = input.split(' ');
  const [ fileName, ...fileText ] = remaining;
  const text = fileText.join(' ');

  switch(commandText) {
    case commands.HISTORY:
      conductor.printHistory();
      break;
    case commands.UNDO:
      conductor.undo();
      break;
    case commands.REDO:
      conductor.redo();
      break;
    case commands.EXIT:
      conductor.run(new ExitCommand());
      break;
    case commands.CREATE:
      conductor.run(new CreateCommand(fileName, text));
      break;
    default :
      console.log(`${commandText} command not found!`);
  }

  rl.prompt();
});