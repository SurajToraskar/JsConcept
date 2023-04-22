// let date=new Date();
// date=date.toLocaleString();
// console.log(date);

// let date1=new Date("January,1,2023,00:00:00");
// date1=date1.toLocaleString();
// console.log(date1);

let date=new Date();

let year=date.getFullYear();
let dateOfMonth=date.getDate();
let dayOfWeek=date.getDay();
let month=date.getMonth();
let hours=date.getHours();
let minutes=date.getMinutes();
let seconds=date.getSeconds();
let milliseconds=date.getMilliseconds();


// console.log(year);
// console.log(dateOfMonth);
// console.log(dayOfWeek);
// console.log(month);
// console.log(hours);
// console.log(minutes);
// console.log(seconds);
// console.log(milliseconds);


// date.setFullYear(2050);
// date.setDate(29);
// date.setMonth(1);
// date.setHours(10);
// date.setMinutes(5);
// date.setSeconds(3);
// date.setMilliseconds(56);


// year=date.getFullYear();
// dateOfMonth=date.getDate();
// month=date.getMonth();
// hours=date.getHours();
// minutes=date.getMinutes();
// seconds=date.getSeconds();
// milliseconds=date.getMilliseconds();


console.log(formatDate());

function formatDate(){
    const date=new Date();
    let year=date.getFullYear();
    let month=date.getMonth()+1;
    let dateOfMonth=date.getDate();
    return `${dateOfMonth}/${month}/${year}`;
}

console.log(formatTime());

function formatTime(){
    const date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let amOrPm=hours>=12?'Pm':'Am';
    hours=hours%12||12;
    return `${hours}:${minutes}:${seconds} ${amOrPm}`;
}
