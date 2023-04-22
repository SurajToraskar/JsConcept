class Car{
    constructor(){
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
    set rating(value){
        this._rating=value;
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


const car1=new Car();
const car2=new Car();
const car3=new Car();

car1.model='Mustang';
car1.color='Yellow';
car1.rating=7;

car2.model='Ferrari';
car2.color='Red';
car2.rating=8.2;

car3.model='Lamborghini';
car3.color='Green';
car3.rating=9;


displayInfo(car1);
displayInfo(car2);
displayInfo(car3);

changeColor(car1,'blue');

displayInfo(car1);

function displayInfo(car){
    console.log(car.model);
    console.log(car.color);
    console.log(car.rating);
}


function changeColor(car,color){
    car.color=color;
}