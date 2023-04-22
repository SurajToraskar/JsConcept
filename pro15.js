const number=[1,2,3,4,5,6,7];
const squaredNumber=number.map(square);
squaredNumber.map(display);


function square(element,index,array){
    return Math.pow(element,2);
}

function display(element){
    console.log(element);
}