// lesson-6a
let message = document.getElementById('massage');
let grating ='';
function gratings(hour){
    if(hour >=6 && hour<= 12) {
        grating = "good morning";
    } else if (hour >= 13 && hour <=18 ) {
        grating = "good afternoon";
    }else if( hour >=19 && hour <= 22){
        grating = "good evening";
    }else {
        grating = "good night";
    }

}

let hour = new Date().getHours();
gratings(hour);

message.innerHTML = grating;