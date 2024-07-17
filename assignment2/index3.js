function findTax(salary) {
    let tax = 0;

    switch(true) {
        case (salary > 1500000):
            tax = salary * 0.3; // 30% tax
            break;
        case (salary > 1000000):
            tax = salary * 0.2; // 20% tax
            break;
        case (salary > 500000):
            tax = salary * 0.1; // 10% tax
            break;
        case (salary > 0):
            tax = 0; // 0% tax
            break;
        default:
            console.log("Invalid salary input.");
            return;
    }

    return tax;
}

console.log(findTax(500000)); 
console.log(findTax(900000));
console.log(findTax(1400000)); 
console.log(findTax(1200000)); 