let date = new Date();


        let minutes = date.getMinutes();
        let amorpm = hours > = 12? "pm":"am";







date = date.toLocaleString();
document.getElementById("mylabel").innerHTML = amorpm;
