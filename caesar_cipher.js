function rot13(str) {
    const alphabet='abcdefghijklmnopqrstuvwxyz'.split("");
    const input=str.toLowerCase();
    let output="";
    let number=13;
  
    for(let i=0; i<input.length; i++){
      const letter=input[i];
      if(alphabet.indexOf(letter)===-1){
        output +=letter;
        continue;
      }
      let index = alphabet.indexOf(letter) + number%26;
      if(index>25) index -=26;
      if(index<0) index +=26;
  
      output += str[i]===str[i].toUpperCase()
             ? alphabet[index].toUpperCase()
             : alphabet[index];
  
    }
    return output;
  }

  console.log(rot13("SERR PBQR PNZC"))