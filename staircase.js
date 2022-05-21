
function staircase(n) {
    // Write your code here
   
    for(let i=0;i<n;i++){
        let stairs="";
         for(let j=0;j<n-i-1;j++){
            stairs+="";
         }
         for(let k=0; k<i+1; k++){
             stairs+="#"
        }
        
       
     console.log(stairs) 
    }

}


staircase(4);
