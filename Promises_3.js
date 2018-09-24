let learnJavaScript = function(){
    return  new Promise(function(resolve,reject){
        resolve("Learning javascript")
    }); 
};

let participateInHackathon = function(message){
    return  new Promise(function(resolve,reject){
        resolve(message+"- Participating in Hackathon");
    }); 
};

let winingHackathon = function(message){
    return  new Promise(function(resolve,reject){
        resolve(message+"- Wining @ Hackathon !");
    }); 
};

// Promise.all([learnJavaScript(),participateInHackathon(),winingHackathon()]).then(function(){
//     console.log('all done')
// });

Promise.race([learnJavaScript(),participateInHackathon(),winingHackathon()]).then(function(){
    console.log('all done')
});