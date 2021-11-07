/**
Given a string of characters as input, write a function that returns it with characters reversed
**/


function reversestring(str)
{

return str.split('').reverse().join('')
}

/**Array reduce method**/

const reverse= string => 
string.split("").reduce((result,character)=> character + result)

console.log(reversestring("baraka"))
console.log(reverse("Samaki"))
