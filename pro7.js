let number = window.prompt("Enter the number:");
number = Number(number);
let choice = window.prompt(`Enter The choice:
                        1:for loop
                        2:while loop
                        3:do-while loop`)
choice=Number(choice);

switch (choice) {
    case 1:
        document.getElementById('table').innerHTML='for-loop <br/><br/>';
        for (let i = 1; i <= 10; i++) {
            document.getElementById('table').innerHTML += `${number} * ${i} = ${number * i}`;
            document.getElementById('table').innerHTML += "<br/>";
        }
        break;
    case 2:
       document.getElementById('table').innerHTML='while-loop <br/><br/>';
        let i = 1
        while (i <= 10) {
            document.getElementById('table').innerHTML += `${number} * ${i} = ${number * i}`;
            document.getElementById('table').innerHTML += "<br/>";
            i++;
        }
        break;
    case 3:
        document.getElementById('table').innerHTML='do-while loop <br/><br/>'
        let j = 1;
        console.log(`do-while loop`)
        do {
            document.getElementById('table').innerHTML += `${number} * ${j} = ${number * j}`;
            document.getElementById('table').innerHTML += "<br/>";
            j++;
        } while (j <= 10);
        break;
}






