//Anagrams are words that contain same number of characters eg below and elbow

function isAnagramx (str1,str2){
    const arr1 = str1.split('').sort()
    const arr2 = str2.split('').sort()
    return arr1.every((value,index) => value === arr2[index])
}