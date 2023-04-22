document.querySelector('#btn').addEventListener('click',Both);


function beginLeft(){
    let timerId=null;
    let x=0;

    timerId=setInterval(frame,5);
    function frame(){
        if(x>=200){
            clearInterval(timerId);
        }else{
            x+=5;
            document.querySelector('#div').style.left=x+'px';
        }
    }
}

function beginDown(){
    let timerId=null;
    let y=0;
    timerId=setInterval(frame,5);
    function frame(){
        if(y>=200){
            clearInterval(timerId);
        }else{
            y+=5;
            document.querySelector('#div').style.top=y+'px';
        }
    }
}

function diagonal(){
    let timerId=null;
    let x=0;
    let y=0;

    timerId=setInterval(frame,5);
    function frame(){
        if(x>=200||y>=200){
            clearInterval(timerId);
        }else{
            x+=5;
            y+=5;
            document.querySelector('#div').style.top=y+'px';
            document.querySelector('#div').style.left=x+'px';

        }

    }
}

function rotateX(){
    let timerId=null;
    let degree=0;
    timerId=setInterval(frame,5);
    function frame(){
        if(degree>=360){
            clearInterval(timerId);
        }else{
            degree+=5;
            document.querySelector('#div').style.transform="rotateX("+degree+"deg)";
        }
    }
}

function rotateY(){
    let timerId=null;
    let degree=0;
    timerId=setInterval(frame,5);
    function frame(){
        if(degree>=360){
            clearInterval(timerId);
        }else{
            degree+=5;
            document.querySelector('#div').style.transform='rotateY('+degree+'deg)';
        }
    }
}

function rotateZ(){
    let timerId=null;
    let degree=0;
    timerId=setInterval(frame,5);
    function frame(){
        if(degree>=360){
            clearInterval(timerId);
        }else{
            degree+=5;
            document.querySelector('#div').style.transform='rotateZ('+degree+'deg)';
        }
    }
}


function All(){
    let timerId=0;
    let x=0;
    let y=0;
    let degree=0;
    timerId=setInterval(frame,5);
    function frame(){
        if(x>=900||y>=2000){
            clearInterval(timerId);
        }else{
            x+=5;
            y+=5;
            degree+=5;
            document.querySelector('#div').style.top=y+'px';
            document.querySelector('#div').style.left=x+'px';
            document.querySelector('#div').style.transform='rotateX('+degree+'deg)';
            document.querySelector('#div').style.transform='rotateY('+degree+'deg)';
            document.querySelector('#div').style.transform='rotateZ('+degree+'deg)';

        }
    }
}

function scaleX(){
    let timerId=null;
    let scaleX=1;
    let scaleY=1;
    timerId=setInterval(frame,5)
    function frame(){
        if(scaleX>=2){
            clearInterval(timerId);
        }else{
            scaleX+=0.01;
            document.querySelector('#div').style.transform='scale('+scaleX+','+scaleY+')';
        }
    }
}


function scaleY(){
    let timerId=null;
    let scaleX=1;
    let scaleY=1;
    timerId=setInterval(frame,5);
    function frame(){
        if(scaleY>=2){
            clearInterval(timerId);
        }else{
            scaleY+=0.01;
            document.querySelector('#div').style.transform='scale('+scaleX+','+scaleY+')';
        }
    }
}


function Both(){
    let timerId=null;
    let scaleX=1;
    let scaleY=1;
    timerId=setInterval(frame,5);
    function frame(){
        if(scaleX>=3||scaleY>=3){
            clearInterval(timerId);
        }else{
            scaleX+=0.01;
            scaleY+=0.01;
            document.querySelector('#div').style.transform='scale('+scaleX+','+scaleY+')';
        }
    }
}

