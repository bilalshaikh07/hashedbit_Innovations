let string = 'INDIA';
let arr = string.split('');
arr.splice(3, 0, 'N', 'E', 'S', 'O');
let result = arr.join('');
console.log(result); 
