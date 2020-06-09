/*
Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

*/

var isSubsequence = function(s, t) {
    let output = [];
      for (i=0; i<s.length;i++){
            let position = t.indexOf(s[i]);
            if(position===-1){
            return false
            } 
            else {
                  t = t.slice(position+1)
                  output.push([i,position]);
            }
    }
    return true
};

console.log(isSubsequence("abc","ahbgdc"))
console.log(isSubsequence("aaaaaa","bbaaaa"))
