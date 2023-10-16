/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
   
     
   return arr.sort((a,b)=>{
       if(fn(a) > fn(b) ) return 1
       if(fn(a) < fn(b) ) return -1

   })
};