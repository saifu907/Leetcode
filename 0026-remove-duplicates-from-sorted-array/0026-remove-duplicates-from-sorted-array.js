/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    

var j = 0;
let len= nums.length
for(let i=0; i<len; i++){
    if(nums[i] == nums[i+1]){
        continue
    }else{
        nums[j]=nums[i]
        j++
    }  
}
return j
    
};