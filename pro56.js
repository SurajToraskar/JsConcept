// console.log(navigator.cookieEnabled);
// document.cookie = "userName=GravityDestroyer;expires=Sun,12 January 2024 12:00:00 UTC;path=/";
// console.log(document.cookie);

function setCookie(name, value, daysToLive) {
    let date = new Date;
    date.setTime(date.getTime + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = " expires="+date.toUTCString();
    document.cookie=`${name}=${value};${expires};path=/`;
    // console.log(document.cookie);
}

// setCookie('Saiyan','Goku',10000);

function deleteCookie(name){
    setCookie(name,null,null);
}

deleteCookie('userName')

function getCookie(name){
    let cDecoded=document.cookie;
    let cArray=cDecoded.split(';');
    let result=null;
    cArray.forEach((element)=>{
        if(element.indexOf(name)==0){
            result=element.substring(name.length+1);
        }
    })
    return result;
}


// setCookie('Ben-10','Ben',10);
console.log(document.cookie);
console.log(getCookie('DragonBallz'));
console.log(getCookie('OnePunchMan'));
console.log(getCookie('Ben-10'));

