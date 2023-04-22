class Car{
    constructor(model,color,rating){
        this._model;
        this._color;
        this._rating;
    }

    set model(value){
        this._model=value;
    }
    set color(value){
        this._color=value;
    }
    set  rating(value){
        this._rating=value;
    }
    get model(){
        return this._model;
    }
    get color(){
        return this._color;
    }
    get rating(){
        return this._rating
    }
}

const car1=new Car();
const car2=new Car();
const car3=new Car();


car1.model='Mustang';
car1.color='Yellow';
car1.rating=8;

car2.model='Ferrari';
car2.color='Red';
car2.rating=9;

car3.model='Lamborghini';
car3.color='Green';
car3.rating=10;

let  cars=[car1,car2,car3];
console.log(cars[0].model);
console.log(cars[0].color);
console.log(cars[0].rating);

console.log(cars[1].model);
console.log(cars[1].color);
console.log(cars[1].rating);

console.log(cars[2].model);
console.log(cars[2].color);
console.log(cars[2].rating);
