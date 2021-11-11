const reverse= number => parseInt(number.toString().split("").reverse().join(""))*Math.sign(number)

console.log(reverse(98))
