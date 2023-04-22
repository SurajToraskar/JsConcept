let num=12345.678;
num=num.toLocaleString('en-US',{style:'currency',currency:'USD'});
let num1=1234567.90;
num1=num1.toLocaleString(undefined,{style:'percent'});
let num2=4326548132418.90;
num2=num2.toLocaleString(undefined,{style:'unit',unit:'celsius'});
let num3=73425782.78;
num3=num3.toLocaleString(undefined,{style:'unit',unit:'mile'});
let num4=89453216.90;
num4=num4.toLocaleString('en-IN',{style:'currency',currency:'INR'});

console.log(num);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);