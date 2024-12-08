/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let temp=x
    let rev =0
    if(x<0) return false
    while(temp>0){
        const r=temp%10
        rev=(rev*10)+r
        temp=Math.floor(temp/10)
    }
      return rev ==x
    
};