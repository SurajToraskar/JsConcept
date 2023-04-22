document.getElementById('name').style.backgroundColor='Red';
document.getElementById('name').style.color='blue';

document.getElementById('submit-btn').onclick=function(){
let elements=document.getElementsByName('anime');
console.log(elements[0].checked);

elements.forEach((element,index,array)=>{
    if(element.checked){
        console.log(`Your Favourite Anime is ${element.value}`);
    }
})
}

let vegetableList=document.getElementsByTagName('li');
console.log(vegetableList);

document.getElementsByTagName('li')[0].style.color='red';
document.getElementsByTagName('li')[0].style.backgroundColor='blue';
document.getElementsByTagName('li')[1].style.color='orange';
document.getElementsByTagName('li')[1].style.backgroundColor='yellow';
document.getElementsByTagName('li')[2].style.color='pink';
document.getElementsByTagName('li')[2].style.backgroundColor='green';
document.getElementsByTagName('li')[3].style.color='purple';
document.getElementsByTagName('li')[3].style.backgroundColor='orange';




let animeList=document.getElementsByClassName('anime');

document.getElementsByClassName('anime')[0].style.color='blue';
document.getElementsByClassName('anime')[0].style.backgroundColor='red';
document.getElementsByClassName('anime')[1].style.color='yellow';
document.getElementsByClassName('anime')[1].style.backgroundColor='orange';
document.getElementsByClassName('anime')[2].style.color='green';
document.getElementsByClassName('anime')[2].style.backgroundColor='pink'

let vegetable=document.querySelectorAll('li');
console.log(vegetable);


document.querySelector('#submit-btn').style.color='green';
document.querySelector('#submit-btn').style.backgroundColor='orange';