/*
* As the loop iterates through a collection, this algorithm finds and “selects” the index with the lowest value
* and swaps it with the beginning index wherever appropriate. 
* This algorithm also requires quadratic time and constant space.
*/

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
      let indexOfMin = i;
  
      for (let j = i + 1; j < array.length; j++)
        if (array[j] < array[indexOfMin]) indexOfMin = j;
  
      if (indexOfMin !== i) {
        let less = array[indexOfMin];
        array[indexOfMin] = array[i];
        array[i] = less;
      }
    }
  
    return array;
  }

  
let array=[5, 3, 1, 2, 4];
console.log(selectionSort(array));