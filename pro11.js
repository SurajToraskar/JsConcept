let anime=['DragonBallz','DemonSlayer','OnePunchMan','OnePiece'];
console.log(anime);
anime.pop();
console.log(anime);
anime.push('DeathNote');
console.log(anime);
anime.shift();
console.log(anime);
anime.unshift('GrandBlue');
console.log(anime);
console.log(anime.length);
console.log(anime.indexOf(`DemonSlayer`));
anime.sort();
console.log(anime);
anime.reverse();
console.log(anime);

for(let i of anime){
    console.log(i);
}


let bikesAndCars=[['Ninja','Bullet','Pulsor','KTM'],['Lamborghini','Ferrari','Mustang','Mitsubishi']];
console.log(bikesAndCars);

for(let i of bikesAndCars){
    console.log('...................');
   for(let j of i ){
    console.log(j);
    
   }
}