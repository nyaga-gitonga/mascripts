/*
*It compares every item against every other item, 
*swapping the order until the bigger ones “bubble” to the top.
* This algorithm requires quadratic time and constant space.
*
*/

//Soln 1
const bubbleSort = array => {
  let swapped;
  do {
    swapped = false;
    array.forEach((number, index) => {
      if (number > array[index + 1]) {
        [array[index], array[index + 1]] = [array[index + 1], array[index]];
        swapped = true;
      }
    });
  } while (swapped);
  return array;
};

function _bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          const less = array[j + 1];
          array[j + 1] = array[j];
          array[j] = less;
        }
      }
    }
  
    return array;
  }

let array=[5, 3];
 console.log(bubbleSort(array));