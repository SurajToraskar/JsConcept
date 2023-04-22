const  car={
    name:"Mustang",
    color:"Red",
    drive:function(){
        console.log(`car can be driven anywhere`);
    },
    brake:function(){
        console.log(`car has brake`);
    }
}

console.log(car.name);
console.log(car.color);

car.drive();
car.brake();

console.log(`-------------------------------------------------------`);
const bike={
    name:"Ninja",
    color:"Green",
    ride:function(){
        console.log(`${this.name} is good for long ride`);
    },
    brake:function(){
        console.log(`${this.name} has better brake`);
    }
}

console.log(bike.name);
console.log(bike.color);
bike.ride();
bike.brake();