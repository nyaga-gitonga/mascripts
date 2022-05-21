function timeConversion(s) {
    // Write your code here
    let period=s.substr(8);
    let hr=s.substr(0,2);
    let militarytime="";

    console.log(period)
    
    if(period=="AM"){
        if(hr=="12"){
            militarytime="00";
        }
        else{
            militarytime=hr;
        }
    }else if(period=="PM"){
        if(hr=="12"){
            militarytime="12";
        }else{
            militarytime=parseInt(hr,10)+12;
        }
    }

 return militarytime + s.substring(2,8)
}

console.log(timeConversion("12:00:00PM"))