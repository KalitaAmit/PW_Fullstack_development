function calculateTax(income) {
    return function () {
        let taxRate;

        if (income <= 25000) {
            taxRate = 0.1;
        } else if (income <= 50000) {
            taxRate = 0.2;
        } else {
            taxRate = 0.3;
        }

        return income * taxRate;
    }
}


const taxForLowIncome = calculateTax(20000)();
console.log("Tax for income 20,000: " + taxForLowIncome);

const taxForMediumIncome = calculateTax(40000)();
console.log("Tax for income 40,000: " + taxForMediumIncome);

const taxForHighIncome = calculateTax(70000)();
console.log("Tax for income 70,000: " + taxForHighIncome);
