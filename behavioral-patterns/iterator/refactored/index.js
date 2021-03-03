const GalleryItem = require('./GalleryItem');
const Iterator = require('./Iterator');

const gallery = new Iterator([
  new GalleryItem('Game of thrones', 9.99),
  new GalleryItem('F.R.I.E.N.D.S', 799.99),
  new GalleryItem('South Park', 799.99),
  new GalleryItem('Money Heist', 5.99),
  new GalleryItem('House of cards', 2.99),
  new GalleryItem('Rick and Morty', 4.99),
  new GalleryItem('Breaking bad', 59.99),
  new GalleryItem('Person of interest', 39.99)
]);

require('readline').emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log('Press any direction key...');

process.stdin.on('keypress', (str, key) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);

  switch(key.name) {
    case 'right' :
      gallery.next().writeLn();
      break;

    case 'left' :
      gallery.prev().writeLn();
      break;

    case 'down' :
      gallery.last().writeLn();
      break;

    case 'up' :
      gallery.first().writeLn();
      break;

    case 'c' :
      if (key.ctrl) {
        process.exit()
      }
  }
});
