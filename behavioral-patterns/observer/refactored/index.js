const Store = require('./Store');
const Shopper = require('./Shopper');
const Mall = require('./Mall');

const relianceDigital = new Store('Reliance Digital');
const chroma = new Store('Chroma');

const ravi = new Shopper('Ravi');
const srisai = new Shopper('Sri Sai');
const lucky = new Shopper('Lucky');
const shubham = new Shopper('Shubham');

const phoenixMall = new Mall();

relianceDigital.subscribe(ravi);
relianceDigital.subscribe(srisai);
relianceDigital.subscribe(lucky);
relianceDigital.subscribe(phoenixMall);

chroma.subscribe(shubham);
chroma.subscribe(phoenixMall);

relianceDigital.sale(20);
chroma.sale(50);

console.log(phoenixMall.sales);