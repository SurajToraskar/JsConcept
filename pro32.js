let x=window.prompt(`Enter The Number:`);
x=Number(x);
try{
    if(isNaN(x)) throw`Not  a Number`;
    if(x==' ') throw`These is Empty`;
}catch(error){
    console.log(error);
}finally{
    console.log(`Done with execution`);
}