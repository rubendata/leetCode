var searchInsert = function(nums, target) {
      
      if(nums.indexOf(target) >=0) {
            return nums.indexOf(target)
      } 
      else {
            return items(nums)
      }
      function items (array) {
          for(i=0; i<array.length;i++){
            if (target<array[i]){
                  return i
            }
            else if (target>array[i] && !(target>array[i+1])){
                  return i+1;
            }
            
      }
    }
};

console.log( searchInsert([0,3,5,6],3))