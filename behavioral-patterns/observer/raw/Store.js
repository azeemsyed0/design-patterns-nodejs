class Store {
  constructor(name) {
    this.name = name;
  }

  sale(discount) {
    console.log(`Sale at ${this.name}, ${discount}% off of everything!`);
  }
}

module.exports = Store;