class Car{
    constructor(){
        this._gas;
    }

    set gas(value){
        this._gas=value;
    }
    get gas(){
        return this._gas;
    }
}

const car1=new Car();
car1.gas=2000;
console.log(car1.gas);

const car2=new Car();
car2.gas=1000;
console.log(car2.gas);

const car3=new Car();
car3.gas=3000;
console.log(car3.gas);