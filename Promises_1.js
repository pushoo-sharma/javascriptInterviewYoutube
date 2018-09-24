let promiseToLearnEveryDay = new Promise(function(resolve , reject){
    
    // promise to learn every day
    let myPromise = true ;
    
    if(myPromise){
        resolve('Doing');
    }
    else{
        reject('Not Doing');
    }
    
});

promiseToLearnEveryDay.then(function(fromResolve){
    console.log("Learning mode is : "+fromResolve);
}).catch(function(fromReject){
    console.log("Learning mode is : "+fromReject);
})