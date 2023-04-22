let counter=0;
function increaseCounter(){
    counter++;
    document.getElementById('counter').innerHTML=counter;
}

function decreaseCounter(){
    counter--;
    document.getElementById('counter').innerHTML=counter;
}