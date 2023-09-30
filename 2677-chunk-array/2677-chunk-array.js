/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
 arr = [1,2,3,4,5]
var chunk = function(arr, size) {
    const ans =[];
   
        for(let i = 0; i<arr.length; i= i + size){ // I = I + Size  to start from the last element in the prev. array
        ans.push(arr.slice(i, i+size))
    }
    
    
    return ans

};
