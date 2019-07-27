'use strict';

class Timer {
    constructor() {
        this.timeMin = 20;
        this.timeSec = 0;
    }

    initTimer() {
    this.countDown.bind(this);

    }

    countDown() {

        var intervalID = setInterval(function () {
            this.timeSec--;
            if (this.timeSec < 0) {
                this.timeSec = 59;
                this.timeMin--;
                document.getElementById("minTimer").innerText = this.timeMin;
                document.getElementById("secTimer").innerText = this.timeSec;
                console.log(this.timeSec + " " + this.timeMin);
            }
        },1000);



        if (this.timeMin < 0) {
            clearInterval(intervalID);
            document.getElementById("resConf").classList.add("hid");
            document.getElementById("resStop").classList.remove("hid");
        }


    }

}