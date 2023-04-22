async function file(){
    let fileLoaded=false;
    if(fileLoaded){
        return 'file is loaded successfully';
    }else{
        throw 'file is not loaded successfully';
    }
}

file().then((value)=>{console.log(value)}).catch((error)=>{console.log(error)});


// other way to do same thing
async function load(){
    let file=false;
    if(file){
        return Promise.resolve('File is loaded');
    }else{
        return Promise.reject('File is not loaded');
    }
}

load().then((value)=>{console.log(value)}).catch((error)=>{console.log(error)});