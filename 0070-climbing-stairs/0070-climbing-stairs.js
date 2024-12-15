/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
let arr=[1,2]
if (n==1) return 1
for(let i=3; i<=n; i++){
let temp=arr[0]
arr[0]=arr[1]
arr[1]=arr[1]+temp
}
return arr[1]
};