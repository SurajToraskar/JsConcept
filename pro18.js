const grades=[12,45,56,76,56,90,12,34,45,56,76];
const descendingSortedGrades=grades.sort(descendingOrder);
const grades1=[12,45,56,76,56,90,12,34,45,56,76];
const ascendingSortedGrades=grades1.sort(ascendingOrder);

console.log(descendingSortedGrades);
console.log(ascendingSortedGrades);

function descendingOrder(x,y){
    return y-x;
}


function ascendingOrder(x,y){
    return x-y;
}