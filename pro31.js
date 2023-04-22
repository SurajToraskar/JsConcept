class Car{
    constructor(model,color){
        this.model=model;
        this.color=color;
    }
}

const cars=[new Car('Mustang','Yellow'),
            new Car('Ferrari','Red'),
            new Car('Lamborghini','Green')];

console.log(`${cars[0].model}:${cars[0].color}`);
console.log(`${cars[1].model}:${cars[1].color}`);
console.log(`${cars[2].model}:${cars[2].color}`);
