  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

function longestWord(string){
 /* let longest=[]
  let maxLength=0;
  string.split(' ').sort((a,b)=>b.length-a.length)
    .forEach(function(word){
    
        if(word.length>=maxLength ){
        maxLength=word.length
        longest.push(word)
    }
  })
 return longest*/

   // Create filtered array
   const wordArr = string.toLowerCase().match(/[a-z0-9]+/g);

   // Sort by length
   const sorted = wordArr.sort((a, b) => b.length - a.length);
 
   // If multiple words, put into array
   const longestWordArr = sorted.filter(
     word => word.length === sorted[0].length
   );
 
   // Check if more than one array val
   if (longestWordArr.length === 1) {
     // Return the word
     return longestWordArr[0];
   } else {
     return longestWordArr;
   }
}

console.log(longestWord('This is a new exiting project and il love it'))