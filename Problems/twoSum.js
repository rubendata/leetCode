var twoSum = function(nums, target) {
      for (i=0; i<nums.length; i++) {
          
          for (j=0;j<nums.length;j++)
            if(i!==j){
                  if(nums[i]+nums[j]===target) {
                        return [i,j]
                  }
            }
      }
      
  };

console.log( twoSum([2,7,11,17], 9))
console.log( twoSum([2,7,11,17], 18))
console.log( twoSum([3,3], 6))