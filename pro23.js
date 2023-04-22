class Student{
    constructor(name,age,cgpa){
        this.name=name;
        this.age=age;
        this.cgpa=cgpa;
    }
    study(){
        console.log(`You are Studying`);
    }
}

const student1=new Student('Goku',21,9.1);
console.log(student1.name);
console.log(student1.age);
console.log(student1.cgpa);
student1.study();

const student2=new Student('Vegeta',22,9);
console.log(student2.name);
console.log(student2.age);
console.log(student2.cgpa);
student2.study();

const student3=new Student('Broly',23,10);
console.log(student3.name);
console.log(student3.age);
console.log(student3.cgpa);
student3.study();