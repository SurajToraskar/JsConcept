
document.querySelector('#button').addEventListener('click',()=>{
    if(document.querySelector('#img').style.display=="none"){
        document.querySelector('#img').style.display='block'
    }else{
        document.querySelector('#img').style.display='none'
    }
})