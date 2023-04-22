// document.getElementById('button').onclick=display;

// function display(){
//     if(this.id='button1'){
//         window.alert(`${this.id} hello `)
//     }else{
//         window.alert("Hello");
//     }
    
// }

// function refresh(){
//     window.alert('refreshing.........');
// }

// console.log(document);
// console.dir(document);


// function change(){
//     window.prompt('.....input is changed');
// }

// document.getElementById('textbox').onchange=change;

// document.getElementById('div').onmouseover=changeColor;
// document.getElementById('div').onmouseout=oldColor;

// function changeColor(){
//     document.getElementById('div').style.backgroundColor='orange';
// }

// function oldColor(){
//     document.getElementById('div').style.backgroundColor='lightgreen';
// }


// document.getElementById('div1').onmouseover=function(){
//     document.getElementById('div1').style.backgroundColor='green';
// }

// document.getElementById('div1').onmouseout=function(){
//     document.getElementById('div1').style.backgroundColor='red';
// }

document.getElementById('div2').onmousedown=function(){
    document.getElementById('div2').style.backgroundColor='red';
}

document.getElementById('div2').onmouseup=function(){
    document.getElementById('div2').style.backgroundColor='yellow'
}