/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
   let ans = []
   for(let i = 0; i < arr.length; ++i){
       //this line to chech if the array meets the function conditions or NOT
       if(fn(arr[i],i)){
        ans.push(arr[i])
       }
   }
    
    return ans
};