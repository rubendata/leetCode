var isPowerOfTwo = function powerTwo (n) {
      return (Math.log2(n) - Math.floor(Math.log2(n))===0)? true : false
  };

 console.log( isPowerOfTwo(8))
 console.log( isPowerOfTwo(9))