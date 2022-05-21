// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
    // SOLUTION 1
    // return arrays.reduce((a, b) => a.concat(b));
    // SOLUTION 2
    // return [].concat.apply([], arrays);
    // SOLUTION 3
    // return [].concat(...arrays);
    // SOLUTION 4
    return arrays.flat(Infinity);
  }

  function  _flatenArray(arr){
    newArr = []
    for( let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < arr[i].length ; j++){
            newArr.push(arr[i][j])
        }
    }
    return newArr
}