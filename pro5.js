document.getElementById('submit-btn').onclick=function(){
    username=document.getElementById('username').value;
    if(document.getElementById('option1').checked){
        console.log(`${username} like DragonBallz`);
    }else if(document.getElementById('option2').checked){
        console.log(`${username} like DemonSlayer`);
    }else if(document.getElementById('option3').checked){
        console.log(`${username} like One Punch Man`);
    }else{
        console.log(`${username} like Dr Stone`);
    }
}