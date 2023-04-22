class Student{
    constructor(name,age,cgpa){
        this.name=name;
        this.age=age;
        this.cgpa=cgpa;
    }
}

class chemistry extends Student{
    constructor(name,age,std){
        super(name,age);
        this.std=std;
    }
}


class Physics extends Student{
    constructor(name,age,place){
        super(name,age);
        this.place=place;
    }
}

const student1=new Student('king',21,9.8);
console.log(student1.name);
console.log(student1.age);
console.log(student1.cgpa);
console.log(`------------------------------------------------`);
const chemstud=new chemistry('Legend',23,11);
console.log(chemstud.name);
console.log(chemstud.age);
console.log(chemstud.std);
console.log(`------------------------------------------------`);
const phystud=new Physics('Nightmare',22,'Vasco');
console.log(phystud.name);
console.log(phystud.age);
console.log(phystud.place);


