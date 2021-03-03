const baseSalary = 100_000;
const overtime = 10;
const rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + (overtime * rate);
}

console.log(getWage(baseSalary, overtime, rate));
// Outputs: 100200

const employee = {
  baseSalary: 100_000,
  overtime: 10,
  rate: 20,  
  getWage: function () {
    return this.baseSalary + (this.overtime * this.rate);
  }
}

console.log(employee.getWage());
// Outputs: 100200