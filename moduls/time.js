class Time {
    box_time;
    divTimer;
    timeRun;
    constructor() {
        this.divTimer = document.createElement("div");
        this.divTimer.setAttribute("id", "timeRun");
    }
    html() {
        return this.divTimer;
    }
    timeStart(color){
        this.box_time = document.getElementById("timeRun");
        this.box_time.style.backgroundColor = color;
        let time = 100;
        this.timeRun = setInterval(() => {
            this.box_time.style.width = --time + '%';
            if(time <-1){
                clearInterval(this.timeRun);
                alert("Lost");
    
            }
        }, 50);
    }
    timeStop(){
        clearInterval(this.timeRun);
    }
}

export{Time}