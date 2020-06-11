var sortColors = function(nums) {
      let placeholder;
      let sorted = true;
      while (sorted){
            sorted = false
            for (i=0; i<nums.length-1;i++){
                  if(compare(nums[i],nums[i+1])) {
                        placeholder = nums[i+1];
                        nums[i+1]= nums[i]
                        nums[i]= placeholder
                        sorted = true
                  }
            }
      } 
      function compare(a,b){
            return (a>b)? true:false
      }
      
      return nums 
};

console.log( sortColors([2,0,2,1,1,0]))

