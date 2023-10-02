/**
 * @param {number} millis
 * @return {Promise}
 */


async function sleep(millis) {
   const func = ((res,rej)=>{
       setTimeout(function(){
           res(millis)
       },millis)
   })

   let x = new Promise(func)
   return x 
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */