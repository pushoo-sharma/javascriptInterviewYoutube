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

learnJavaScript().then(function(result){
    return(participateInHackathon(result));
}).then(function(result){
    return(winingHackathon(result));
}).then(function(result){
    console.log(result);
})