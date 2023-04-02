const clock = document.querySelector("h2#clock");

//clock.innerText="afsd";
function getClock(){
    const date = new Date();
    clock.innerText=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `;
}

setInterval(getClock,1000);