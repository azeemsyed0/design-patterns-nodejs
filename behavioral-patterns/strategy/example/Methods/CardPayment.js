const Bank = require('../Bank');

class CardPayment extends Bank {
  processPayment() {
    console.log(`Card payment for amount ${this.amount} for account ${this.account} has been processed!`)
  }

  processRefund() {
    console.log(`Refund of amount ${this.amount} for account ${this.account} has been issued!`)
  }
}

module.exports = CardPayment;