/**
 * Given a string of lowercase letters in the range ascii[a-z], determine the index of a character
 *  that can be removed to make the string a palindrome. There may be more than one solution, but any will do. 
 * If the word is already a palindrome or there is no solution, return -1. 
 * Otherwise, return the index of a character to remove.
 * 
 */

 function palindromeIndex(s) {
    // Write your code here
    
    for(let i=0;i<s.length;i++){
        
        let newStr=s.slice(0,i)+ s.slice(i+1)
        
                  
                  if(newStr===newStr.split("")
                  .reverse()
                  .join("")){
                      return i
                  }
                 
                  
    }
    return -1
}
