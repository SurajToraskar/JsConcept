const a=12;
const b=13;
if((a==12)&&(b==15)){
    console.log(`AND Operator`);
}else if((a==12)||(b==13)){
    console.log(`OR Operator`);
}


if(!(a==14)){
    console.log("NOT Operator");
}else{
    console.log(`control is exited`);
}

for(let i=0;i<10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}