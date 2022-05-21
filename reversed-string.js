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


function _reverse(str){
    let revString='';
    for(let char of str){
      revString=char + revString
    }

    return revString;
}

console.log(reversestring("baraka"))
console.log(reverse("Samaki"))
console.log(_reverse('julius'))
