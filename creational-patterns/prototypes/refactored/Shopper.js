class Shopper {
  constructor(name='unnamed person') {
    this._name = name;
    this._shoppingList = [];
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get shoppingList() {
    return this._shoppingList.join(', ');
  }

  addItemToList(item) {
    this._shoppingList.push(item);
  }

  clone() {
    const proto = Object.getPrototypeOf(this);
    const clonedShopper = Object.create(proto);
    clonedShopper._name = this._name;
    clonedShopper._shoppingList = [...this._shoppingList];

    return clonedShopper;
  }
}

module.exports = Shopper;
