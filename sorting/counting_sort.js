/*
* If we somehow know the maximum value,
* we can use this algorithm to sort a collection in linear time and space! 
* The maximum value lets us create an array of that size to count the occurrence of each index value.
* Then, it’s just a matter of extracting all the indexes that have non-zero counts into our result array. 
* By exploiting the constant-time lookup of arrays, this hash-like algorithm is the most performant possible.
*
*/

const countingSort = (array, max) => {
    const counts = new Array(max + 1);
    counts.fill(0);
    array.forEach(value => counts[value]++);
  
    const result = [];
    let resultIndex = 0;
  
    counts.forEach((count, index) => {
      for (let i = 0; i < count; i++) {
        result[resultIndex] = index;
        resultIndex++;
      }
    });
  
    return result;
  };

  let array=[5, 3, 1, 2, 4];
  console.log(countingSort(array,5));
  
