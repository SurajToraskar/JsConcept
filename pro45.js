
const tagname=document.createElement('h1');
tagname.textContent='Best Website';

document.body.prepend(tagname);


const veg1=document.createElement('li');
const veg2=document.createElement('li');
const veg3=document.createElement('li');
const veg4=document.createElement('li');

veg1.textContent='Carrots';
document.querySelector('#veg').append(veg1);

veg2.textContent='Turnip';
document.querySelector('#veg').append(veg2);

veg3.textContent='Garlic';
document.querySelector('#veg').prepend(veg3);

veg4.textContent='Ginger';
document.querySelector('#veg').prepend(veg4);

const veg5=document.createElement('li');
veg5.textContent='Onion';

document.querySelector('#veg').insertBefore(veg5,document.querySelector('#veg').getElementsByTagName('li')[5]);

const veg6=document.createElement('li');
veg6.textContent='Ladyfinger';

document.querySelector('#veg').insertBefore(veg6,document.querySelector('#veg').getElementsByTagName('li')[7]);