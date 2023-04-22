let anime=['dragonBallz','demonSlayer','onePunchMan','deathNote'];
anime.forEach(capitalLetter);
console.log(anime);
anime.forEach(display);

function capitalLetter(element,index,array){
    array[index]=element[0].toUpperCase()+element.substring(1);
}

function display(element){
    console.log(element)
}