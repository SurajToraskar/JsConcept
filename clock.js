setInterval(update,1000);
function update(){
    document.getElementById('clock').innerHTML=formatTime();
    function formatTime(){
        let date=new Date();
        let hours=date.getHours();
        let minutes=date.getMinutes();
        let seconds=date.getSeconds();
        let amOrPm=hours>=12?'Pm':'Am';
        hours=hours%12||12;
        hours=formatZeroes(hours);
        minutes=formatZeroes(minutes);
        seconds=formatZeroes(seconds);
        return `${hours}:${minutes}:${seconds} ${amOrPm}`;
    }

    function formatZeroes(time){
         time=time.toString();
        return time.length<2?'0'+time:time;
    }
}