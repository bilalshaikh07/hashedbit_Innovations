function cal(num1, num2, oper){
    let result; 
    switch(oper){
        case "+":
            result = num1+num2;
            break; 

        case "-":
            result = num1-num2;
            break; 

        case "*":
            result = num1*num2;
            break; 

        case "/":
            if(num2!==0){
                result = num1/num2;
            }else{
                result = "can not divide by zero"
            }
        break; 
        default:
            result = "invalid operation"; 
            break; 
    }

    return result; 
}

r=cal(2,2,"+")
console.log(r)
r1=cal(2,8,"*")
console.log(r1)
