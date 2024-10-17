function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
    //Write your code here.    
        var flag = false;
        if(year % 4 === 0){
            flag = true;
        }
        if (year % 100 ===0){
            flag = false;
        }
        if(year % 400 === 0){
            flag = true;
        }
        if (flag){
            console.log("Leap year.");
        }else{
            console.log("Not leap year.");
        }
        
    
    /**************Don't change the code below****************/    
    
    }