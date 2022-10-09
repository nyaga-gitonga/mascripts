function extrapolate(d, x)
    {
        let y = d[0][1] + (x - d[0][0]) / (d[1][0] - d[0][0]) *
                    (d[1][1] - d[0][1]);
 
        return y;
    }
     
    // Sample dataset
    let d = [
    [1,Math.round(18420.894240)],
    [2,Math.round(18494.26924)],
    [3,Math.round(18527.37862)],
    [4,Math.round(18207.44112)],
    [5,Math.round(18223.65987)],
    [6,Math.round(18226.72237)],
    [7,Math.round(18247.51924)],
    [8,Math.round(18255.87862)],
    [9,Math.round(18275.15987)],
    [10,Math.round(18230.84737)],
    [11,Math.round(18256.75362)],
    [12,Math.round(18269.84737)],
    [13,Math.round(18285.97237)],
    [14,Math.round(18306.03487)]
];

let e=[
    [1,93173],[2,93217],[3,93291],[4,93295],[5,93334],[6,93374],[7,93414],[8,93455],[9,93497],[10,93529],[11,93569],[12,93610]
]
    	

 
    // Sample x value
    let x = '15';


    console.log(extrapolate(e, x));