class Car{
    static numberOfCars=0;
    constructor(name){
        this.name=name;
        Car.numberOfCars+=1;
    }
    static startRace(){
        console.log(`3......2......1......GO`);
    }
}

const car1=new Car('Mustang');
const car2=new Car(`Ferrari`);
const car3=new Car(`Lamborghini`);
const car4=new Car(`VolksWagon`);

console.log(car1.name);
console.log(car2.name);
console.log(car3.name);
console.log(car4.name);


Car.startRace();
console.log(Car.numberOfCars);
