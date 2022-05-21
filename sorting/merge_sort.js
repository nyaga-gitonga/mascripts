/**
 *  It requires a recursive part that splits up a collection into single units,
 *  and then an iterative part that combines them back together in the right order.
 *  This algorithm takes linearithmic time and linear space.
 */

 const mergeSort = array => {
    if (array.length < 2) return array;
  
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle),
      right = array.slice(middle, array.length);
  
    return merge(mergeSort(left), mergeSort(right));
  };
  
  const merge = (left, right) => {
    const result = [];
  
    while (left.length && right.length) {
      if (left[0] <= right[0]) result.push(left.shift());
      else result.push(right.shift());
    }
  
    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());
  
    return result;
  };

  let array=[5, 3, 1, 2, 4];
  console.log(mergeSort(array));