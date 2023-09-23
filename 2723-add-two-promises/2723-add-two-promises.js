/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1,promise2])  // it contaimn the first and second value [2,4]for example)
    
    .then(([val1,val2])=>{ // passing the [2,4] to the 
        return val1 + val2
    })
           
        
    
    
        
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */