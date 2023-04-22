document.getElementById('innerDiv').addEventListener('mousedown',changeGreen);
document.getElementById('outerDiv').addEventListener('mousedown',changeOrange,true);


function changeRed(){
    console.log(this);
    this.style.backgroundColor='red';
}

function changeOrange(){
    console.log(`2`);
    document.querySelector('#outerDiv').style.backgroundColor='orange';
}

function changeGreen(){
    console.log('1');
    document.querySelector('#innerDiv').style.backgroundColor='green';
}