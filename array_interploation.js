const interpolateArray = (data, fitCount) => {
    let newData = [];
    let springFactor = Number((data.length - 1) / (fitCount - 1));
    let linearInterpolate = (before, after, atPoint) => {
      return before + (after - before) * atPoint;
    };
  
    for (var i = 0; i < fitCount - 1; i++) {
      let tmp = i * springFactor;
      let before = Number(Math.floor(tmp)).toFixed();
      let after = Number(Math.ceil(tmp)).toFixed();
      let atPoint = tmp - before;
      newData.push(linearInterpolate(data[before], data[after], atPoint));
    }
    
    // for new allocation
    newData[fitCount - 1] = data[data.length - 1];
    
    return newData;
  };

let originalArry = [1, 5, 3];
let newArray = interpolateArray([1, 5, 3], 10);

console.log(newArray);