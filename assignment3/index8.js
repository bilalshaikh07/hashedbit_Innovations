function repeatedSumOf(number) {
    function sumOfNumber(num) {
      return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
  
    let sum = sumOfNumber(number);
    
    if (sum < 10) {
      return sum;
    } else {
      return repeatedSumOf(sum);
    }
  }
  
  let number = 353
  let result = repeatedSumOf(number);
  console.log(`Repeated sum of digits of ${number} is ${result}`); // Output: Repeated sum of digits of 456 is 6
  