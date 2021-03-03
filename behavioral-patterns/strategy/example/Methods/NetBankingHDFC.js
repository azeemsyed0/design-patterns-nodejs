const Bank = require('../Bank');

class NetBankingHDFC extends Bank {
  processPayment() {
    console.log(`Net banking HDFC payment for amount ${this.amount} for account ${this.account} has been processed!`)
  }

  processRefund() {
    console.log(`Refund of amount ${this.amount} for account ${this.account} has been issued!`)
  }
}

module.exports = NetBankingHDFC;