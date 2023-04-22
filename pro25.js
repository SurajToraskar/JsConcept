class Animal{
    alive=true;
    eat(){
        console.log(`Common Process`);
    }
}

class Fish extends Animal{
   swim(){
    console.log(`Good Swimmer`);
   }
}

class Rabbit extends Animal{
    walk(){
        console.log(`Can walk on land`);
    }
}

const animal1=new Animal();
console.log(animal1.alive);
animal1.eat();

const rabbit1=new Rabbit();
console.log(rabbit1.alive);
rabbit1.eat();
rabbit1.walk();

const fish1=new Fish();
console.log(fish1.alive);
fish1.eat();
fish1.swim();