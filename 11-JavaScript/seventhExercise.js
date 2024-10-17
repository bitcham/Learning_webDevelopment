function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        var nums = [];
        
        if (n <= 0) {
            return nums;
        }
        
        for(var i = 0; i < n; i++){
            if(i === 0){
                nums.push(0);
            }else if(i === 1){
                nums.push(1);
            }else{
                nums.push(nums[i-1] + nums[i-2]);
            }
            
        }
        
        return nums;
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    