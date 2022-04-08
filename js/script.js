let canvasEl = document.getElementById('canvasEl');
let secondsEl = document.getElementById("seconds")
let clicksEl = document.getElementById("clicks")
let clicks = 0;
let clickTime = []

let seconds = 30.0;

let off = true 

canvasEl.addEventListener("click", clickEvent)



function start(){
    on = true;
    if(seconds>0){
        setInterval(clickEvent, 10)
    }
}



function clickEvent() {
    let time = Math.floor(Date.now());

    clickTime.push(time)



    clicks += 1;
    console.log(clicks)
    console.log(clickTime)
    
    clicksEl.innerHTML = "Sekunder: " + clicks;
}


function timer(){
    seconds -= 0.01
    secondsEl.innerHTML = "Sekunder: " + seconds.toFixed(2);
}
