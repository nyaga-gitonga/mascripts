    const array1= ['a', 'b', 'x', 'z'];
    const array2= ['b', 'x', 'c']
     
    // Iterate through each element in the
    // first array and if some of them
    // include the elements in the second
    // array then return true.
    function findCommonElements3(arr1, arr2) {
        return arr1.some(item => arr2.includes(item))
    }

console.log(findCommonElements3(array1, array2))
