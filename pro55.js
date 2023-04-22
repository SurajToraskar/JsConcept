// console.dir(window);
// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(window.outerHeight);
// console.log(window.outerWidth);
// console.log(window.scrollX);
// console.log(window.scrollY);
// console.log(window.location.href);
// // window.location.href='https://www.google.com';
// console.log(window.location.hostname);
// console.log(window.location.pathname);

// document.querySelector('#google').addEventListener('click',()=>{
//     window.open('https://www.google.com')
// })


// document.getElementById('google').addEventListener('click',()=>{
//     window.close();
// })

// document.getElementById('google').addEventListener('click',()=>{
//     window.print();
// })

document.getElementById('google').addEventListener('click',()=>{
    window.confirm("Hello");
    window.prompt("Hi");
    window.alert('Bro');
})