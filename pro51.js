 document.querySelector('#button').addEventListener('click',(event)=>{
    if(document.querySelector('#img').style.visibility=='hidden'){
        document.querySelector('#img').style.visibility='visible';
    }else{
        document.querySelector('#img').style.visibility='hidden';
    }
 })