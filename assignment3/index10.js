function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  let input = "word";
  let reversed = reverseString(input);
  console.log(reversed); 
  