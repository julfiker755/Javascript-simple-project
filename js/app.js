//Javascript coundown project
//Dom
const days1=document.querySelector("#days");
const hours1=document.querySelector("#hours");
const min1=document.querySelector("#min");
const sec1=document.querySelector("#sec")

//calculate time
const lastdate="15 March 2022";

function coundown(){
    const lastnewdate=new Date(lastdate);
    const update=new Date();
    const totaltime=(lastnewdate-update)/1000;
    
    const days=Math.floor(totaltime/3600/24);
    const hours=Math.floor(totaltime/3600)%24;
    const Minutes=Math.floor(totaltime/60)%60;
    const Seconds=Math.floor(totaltime)%60;
    days1.innerHTML=days;
    hours1.innerHTML=hours;
    min1.innerHTML=Minutes;
    sec1.innerHTML=Seconds;
    
}
coundown()
setInterval(coundown,1000)

//Javascript conder project
//cound dom
const con = document.querySelector("#cound");
var count = 1;
setInterval(() => {
    // count++;
    // con.innerHTML = count;
    if(count<=100){
        count++;
        con.innerHTML = count;
    }
}, 1000)
