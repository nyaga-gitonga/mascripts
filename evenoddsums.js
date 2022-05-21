function evenoddsums(arr){
    let evens=0;
    let odds=0;
    let sumsArr=[];

    arr.forEach(num=>{
        if(num%2==0){
            evens+=num
        }
        else{
            odds+=num
        }
    })
    sumsArr.push(evens);
    sumsArr.push(odds);

    return sumsArr
}

console.log(evenoddsums([2,5,6,7,9]))