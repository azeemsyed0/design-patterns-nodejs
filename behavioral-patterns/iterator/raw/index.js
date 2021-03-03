const GalleryItem = require('./GalleryItem');
const gallery = [
  new GalleryItem('Game of thrones', 9.99),
  new GalleryItem('F.R.I.E.N.D.S', 799.99),
  new GalleryItem('South Park', 799.99),
  new GalleryItem('Money Heist', 5.99),
  new GalleryItem('House of cards', 2.99),
  new GalleryItem('Rick and Morty', 4.99),
  new GalleryItem('Breaking bad', 59.99),
  new GalleryItem('Person of interest', 39.99)
];

require('readline').emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log('Press any direction key...');

process.stdin.on('keypress', (str, key) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);

  switch(key.name) {
    case 'right' :
      process.stdout.write('right');
      break;
    case 'left' :
      process.stdout.write('left');
      break;
    case 'down' :
      process.stdout.write('down');
      break;
    case 'up' :
      process.stdout.write('up');
      break;
    case 'c' :
      if (key.ctrl) {
        process.exit()
      }
  }
});