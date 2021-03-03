// Context
class Payment {
  constructor(processor) {
    this.processor = processor;  
  }

  pay() {
    return this.processor.pay();
  }

  refund() {
    return this.processor.refund();
  }
}

module.exports = Payment;