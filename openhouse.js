"use strict;"
const MS_IN_SEC = 1000;
const MS_IN_MIN = 60 * MS_IN_SEC;
const MS_IN_HR = 60 * MS_IN_MIN;
const MS_IN_DAY = 24 *MS_IN_HR;

function createCountdown(elementId, startTime){
    var clockNode = document.createElement('div');
    function setTime(){
        var time = startTime - Date.now();
        var days= Math.floor(time / MS_IN_DAY);
        time -= days * MS_IN_DAY;
        var hours = Math.floor(time / MS_IN_HR);
        time -= hours * MS_IN_HR;
        var minutes=Math.floor(time / MS_IN_MIN);;
        time -= minutes * MS_IN_MIN;
        var seconds=Math.floor(time / MS_IN_SEC);;
        time -= seconds * MS_IN_SEC;
        
        clockNode.innerHTML = "In " + days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";
        document.getElementById(elementId).appendChild(clockNode);
    };
        
        

        setInterval(setTime, 1000);
        
};


createCountdown("all-university", Date.parse("2018-4-7"));
createCountdown("engineering", Date.parse("2018-4-4"));