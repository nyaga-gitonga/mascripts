const isPalindrome = string => {
const cleaned=string.replace(/\W/g,"").toLowerCase();

return(cleaned===cleaned.split("").reverse().join(""))

}

//Using Every function

const _isPalindrome = string =>
  string
    .split("")
    .every((character, index) => character === string[string.length - 1 - index]);

console.log(isPalindrome("toto"))
console.log (_isPalindrome("madam"))
