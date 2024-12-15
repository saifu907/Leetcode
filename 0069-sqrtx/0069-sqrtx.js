/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
var left=0
var right=x
let result=-1 
while(left<=right){
    var mid=Math.floor(left+(right-left)/2)
    if(mid*mid==x){
        return mid
    }else if(mid*mid>x){
        right=mid-1
    }else{
        left=mid+1
        result=mid
    }
}
return result
    
};