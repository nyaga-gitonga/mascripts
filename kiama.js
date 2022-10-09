const imperativeLongestWord = function (sentence) {
    // 1. Create a copy of the argument
    let testSentence = sentence;
  
    // 2. Ensure string is in lower case
    testSentence = testSentence.toLowerCase();
  
    // 3. Convert the sentence string to an array
    const sentenceArr = testSentence.split(" ");
  
    // 4. Remove characters that are not letters from each word
    const cleanArr = sentenceArr.map((word) => word.replace(/[^a-zA-Z ]/g, ""));
  
    // 5. Sort the array
    const sortedArr = cleanArr.sort((a, b) => b.length - a.length);
  
    // 6. Create array of the longest characters ie word with the same lenth as the first element
    const longestArr = sortedArr.filter((word) => word.length === sortedArr[0].length);
  
    // 7. Check if we have two or more 'longest' words
    if (longestArr.length > 1) {
      // 8. Find the word with the most vowels and return it
      const vowelOccurencesArr = longestArr.map((word) => word.match(/[aeiou]/gi).length);
      const maxVovel = Math.max(...vowelOccurencesArr);
      const maxVowelIndex = vowelOccurencesArr.indexOf(maxVovel);
  
      return longestArr[maxVowelIndex];
    } else {
      // 8. If not we return the only word in the array
      return String(longestArr);
    }
  };

  console.log(
    imperativeLongestWord(
      "Smart people learn from everything and everyone, average people from their experienca experience , stupid people already, have all the answers"
    )
  );