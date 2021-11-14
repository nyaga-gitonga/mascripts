/*
Given a number as an input, print out every integer from 1 to that number.
However when the interger is divisible by 2, print out Fizz when its divisible by 3 print out Buzz. When its divisible by both 2 aand 3 
print out "Fizz Buzz"
*/

const fizzBuzz= number => {
let output=[]

for(let i=1;i<number; i++){
if(i%6===0)
output.push("Fizz Buzz")
else if(i%2 ===0)
output.push("Fizz")
else if(i%3===0)
output.push("Buzz")
else
output.push(i)
}

return output
}

console.log(fizzBuzz(17))
