/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let ans = []
    if(nums.length > 0){
    ans = fn(init,nums[0])
    for(let i = 1; i<nums.length; i++){
        ans = fn(ans ,nums[i])
    }
    return ans;
    }
    else{
        return init;
    }
};