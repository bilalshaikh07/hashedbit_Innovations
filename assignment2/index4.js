function sumOfProd(n1, n2) {
    let num1 = n1.toString();
    let num2 = n2.toString();

    let sum = 0;

    for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
        
        let n3 = parseInt(num1[num1.length - 1 - i]) || 0;
        let n4 = parseInt(num2[num2.length - 1 - i]) || 0;


        sum += n3 * n4;
    }

    return sum;
}

console.log(sumOfProd(6, 34)); 
console.log(sumOfProd(123, 456)); 
console.log(sumOfProd(9876, 5432));
