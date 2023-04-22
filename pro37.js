let promise=new Promise((resolve,reject)=>{
    let fileLoaded=false;
    if(fileLoaded){
        resolve("File is Loaded Successfully");
    }else{
        reject('File is not Loaded');
    }
});

promise.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
});


let promise1=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000);
});

promise1.then(()=>{console.log(`The Code is Running`)});

let wait =time=>new Promise((resolve,reject)=>{
    setTimeout(resolve,time);
})

wait(2000).then(()=>{console.log(`Second code is working`)})


async function time(){
    let time=false;
    if(time){
        return `Good the code is working`;
    }else{
        throw `You wrote a rubbish code`;
    }
}

time().then((value)=>{console.log(value)}).catch((error)=>{console.log(error)});