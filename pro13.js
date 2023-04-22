function sum(a,b,callback){
    let result=a+b;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

sum(3,4,displayConsole);