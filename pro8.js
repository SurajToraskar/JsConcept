let row=window.prompt(`Enter the row`);
row=Number(row);
let column=window.prompt(`Enter the Column`);
column=Number(column);
const symbol=window.prompt(`Enter the symbol`);

for(let i=1;i<=row;i++){
    for(let j=1;j<=column;j++){
        document.getElementById('table').innerHTML+=symbol;
    }
    document.getElementById('table').innerHTML+=`<br/>`;
}



