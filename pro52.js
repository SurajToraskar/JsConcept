window.addEventListener('keydown', move);
let x = 0;
let y = 0;

function move(event) {
    switch (event.key) {
        case 'ArrowUp':
            y -= 5;
            document.querySelector('#div').style.top = y + 'px';
            break;
        case 'ArrowDown':
            y += 5;
            document.querySelector('#div').style.top = y + 'px';
            break;
        case 'ArrowLeft':
            x -= 5;
            document.querySelector('#div').style.left = x + 'px';
            break;
        case 'ArrowRight':
            x += 5;
            document.querySelector('#div').style.left = x + 'px';
            break;
        default:
            console.log('Press the Arrow Key to move');
            break;
    }
}