/**
 * Given a strin return the strin which appears the most
 * 
 */

function maxCharacter(string){
    let characters={}
    let maxNum=0
    let maxChar=0

    string.split('').forEach(char => characters[char] ? characters[char]++ : characters[char]=1 );

    for(let char in characters){
      if(characters[char]>maxNum){
          maxNum=characters[char]
          maxChar=char
      }
    }

    return maxChar
}

console.log(maxCharacter('muvemujisunipyuyuyuuuuuuuuuu'))