let timer=setInterval(countUp,100);
let max=window.prompt('Enter The Number:');
max=Number(max);
let count=0;
function countUp(){
    count+=1;
    console.log(count);
    if(count>=max){
        clearInterval(timer);
    }
}