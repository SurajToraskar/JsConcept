let store = new Map([
    ["Counterstrike", 100],
    ["Serious-Sam", 150],
    ["GTA", 1000]
])
store.forEach((value, key) => { console.log(`${key}:${value}`) });

console.log(store)

let shoppingCart = 0;
// shoppingCart+=store.get("Counterstrike");
console.log(shoppingCart);
store.set("TOD", 200);
console.log(store);
console.log(store.has("Arcade"));
console.log(store.has("Serious-Sam"));


console.log(store.get('Serious-Sam'));

console.log(store.size);
store.forEach((value,key)=>{
    shoppingCart+=store.get(key);
    console.log(shoppingCart);
})


const anime=new Map([
    ["DragonBallz",9.5],
    ["DemonSlayer",8]
])

anime.set("OnePunchMan",9);
anime.set("DeathNote",5);
anime.set("GrandBlue",6);
console.log(anime);
console.log(anime.has("OnePunchMan"));
console.log(anime.size);
console.log(anime.get("DragonBallz"));

anime.forEach((value,key)=>{console.log(`${key}:${value}`)})


anime.forEach((_,key)=>{
    shoppingCart+=anime.get(key);
    console.log(shoppingCart);
})

