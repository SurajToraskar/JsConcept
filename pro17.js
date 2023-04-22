const price=[12,34,45,65,67,56,21];
const totalPrice=price.reduce(singleElement);
console.log(totalPrice);

function singleElement(total,element){
    return total+element;
}