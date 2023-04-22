document.getElementById('div').addEventListener('mouseover',changeRed);
function changeRed(){
    console.log(this.id);
    document.getElementById(this.id).style.backgroundColor='red';
}

document.getElementById('div').addEventListener('mouseout',changeBlue);
function changeBlue(){
    console.log(this.id)
    document.getElementById(this.id).style.backgroundColor='blue';
}


document.getElementById('div1').addEventListener('mousedown',changeRed);
document.getElementById('div1').addEventListener('mouseup',changeBlue);


