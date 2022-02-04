const spiral= number =>{
 let counter=1;
 let startRow=0;
 endRow=number-1;
 let startColumn=0;
 endColumn=number-1;

 const matrix=[];

 for(let i=0; i<number; i++)
     matrix.push([]);
     while(startColumn<=endColumn && startRow <= endRow){
         //start row
       for(let i=startColumn;i<=endColumn; i++){
        matrix[startRow][i]=counter;
        counter++;
       }
       startRow++;
       
       //End column
      for(let i=startRow; i<=endRow; i++){
       matrix[i][endColumn]= counter;
       counter++;
      }
      endColumn--;
    

    //End row
    for(let i=endColumn; i>=startColumn; i--){
     matrix[endRow][i] =counter;
     counter++;
    }
    endRow--;

     //start Column
     for(let i=endRow;i>=startRow; i--){
         matrix[i][startColumn]=counter;
         counter++;
     }
     startColumn++;
 }

 return matrix;
}

console.log(spiral(5));