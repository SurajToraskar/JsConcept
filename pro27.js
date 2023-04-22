class Car{
    constructor(power) {
        this._power=power;
    }

    get power(){
        return this._power;
    }
}

const car1=new Car(200);
const car2=new Car(100);
const car3=new Car(400);

console.log(car1.power);
console.log(car2.power);
console.log(car3.power);
console.log('------------------------');

class car{
    constructor(model,color,rating){
        this._model=model;
        this._color=color;
        this._rating=rating;
    }
    get model(){
        return this._model;
    }
    get color(){
        return this._color;
    }
    get rating(){
        return this._rating;
    }
}

const cars1=new car('Mustang','Green',6);
const cars2=new car('Ferrari','Red',7);
const cars3=new car('Lamborghini','Yellow',8);

console.log(cars1.model);
console.log(cars1.color);
console.log(cars1.rating);

console.log('--------------------------');

console.log(cars2.model);
console.log(cars2.color);
console.log(cars2.rating);

console.log('--------------------------');

console.log(cars3.model);
console.log(cars3.color);
console.log(cars3.rating);

console.log('--------------------------');