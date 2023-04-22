const age=[15,11,22,67,12,45,90,56,21,69,79,98,23,35,11];
const filterAges=age.filter(filterAge);
filterAges.forEach(display);

function filterAge(element){
    return (element>18);
}

function display(element){
    console.log(element);
}