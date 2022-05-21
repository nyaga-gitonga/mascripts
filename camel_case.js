function capitalizeWords(sentence){
return sentence 
       .toLowerCase()
       .split(' ')
       .map(word => word.charAt(0).toUpperCase() + word.substring(1))
       .join(' ')

}

console.log(capitalizeWords('this is an awesome opportunity'))