console.log(this);

class Player{
    score=0;
    pause(){
        console.log(`You Pause The Game`);
    }
    exit(){
        console.log('You Exited The Game');
    }
}

let player1=new Player();
console.log(player1.score);
player1.pause();
player1.exit();

let player2=new Player();
console.log(player2.score);
player2.pause();
player2.exit();

let player3=new Player();
console.log(player3.score);
player3.pause();
player3.exit();
