let amount=1200;
let item='cryptocurrency';

let timer1=setTimeout(firstMessage,3000,amount,item);
let timer2=setTimeout(secondMessage,6000);
let timer3=setTimeout(thirdMessage,9000);


function firstMessage(amount,item){
    window.alert(`buy ${item} for ${amount}`);
}

function secondMessage(){
    window.alert(`Not a Scam`);
}

function thirdMessage(){
    window.alert(`Do it fast`);
}

document.getElementById('clearTimeout').onclick=function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
}