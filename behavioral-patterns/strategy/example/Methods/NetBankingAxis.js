const Bank = require('../Bank');

class NetBankingAxis extends Bank {
  processPayment() {
    console.log(`Net banking Axis payment for amount ${this.amount} for account ${this.account} has been processed!`)
  }

  processRefund() {
    console.log(`Refund of amount ${this.amount} for account ${this.account} has been issued!`)
  }
}

module.exports = NetBankingAxis;