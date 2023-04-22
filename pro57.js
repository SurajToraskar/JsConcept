// console.log(navigator.cookieEnabled);

// document.cookie="username=King;expires=Sun,6 January 2025 12:00:00 UTC;path=/";
// console.log(document.cookie);


function setCookie(name,value,dayToLive){
    let date=new Date();
    date.setTime(date.getTime()+(dayToLive*24*60*60*1000));
    let expires='expires='+date.toUTCString();
    // console.log(expires);
    document.cookie=`${name}=${value};${expires};path=/`;
    console.log(document.cookie);
}

// setCookie('cartoon1',"Ben-10",10);

function deleteCookie(name){
    setCookie(name,null,null);
}

// deleteCookie('Ben-10');

// setCookie('OnePunchMan','Saitama',11);

// function getCookie(name){
//     console.log(`first call ${name}`);
//     let cDecoded=decodeURIComponent(document.cookie);
//     let cArray=cDecoded.split(';');
//     console.log(cArray);
//     let result=null;
//     return result =cArray.forEach(check);
//     function check(element){
//         console.log(`second call ${name}`)
//         console.log(element.indexOf(name));
//         if(element.indexOf(name)==0){
//             console.log(`third call ${name}`)
            
//             result=element.substring(name.length+1);
//         }
//     }

// }


function getCookie(name){
    let cDecoded=decodeURIComponent(document.cookie);
    let cArray=cDecoded.split(';');
    console.log(cArray);
    let result=null;
    cArray.forEach((element)=>{

        console.log(`${element}::${element.indexOf(name)}`)
        if(element.indexOf(name)==0){
            result=element.substring(name.length+1);
        }
    })
    return result
}

console.log(getCookie('lastname'));
