async function loadFile(){
    let file=false;
    if(file){
        return `fileX loaded`;
    }else{
        return `fileX is not loaded`;
    }
}

async function wait(){
    let message=await loadFile();
    console.log(message);
}

wait();


// other way

async function file(){
    let fileLoaded=false;
    if(fileLoaded){
        return `file is loaded properly`;
    }else{
        throw `file is not loaded`;
    }

}

async function waitX(){
    try{
        let message=await file();
        console.log(`The success message: ${message}`);

    }catch(error){
        console.log(`The error message: ${error}`);
    }
   
}

waitX();