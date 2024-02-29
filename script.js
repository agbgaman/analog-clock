function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    document.getElementById('hour').style.transform = `rotate(${hRotation}deg)`;
    document.getElementById('min').style.transform = `rotate(${mRotation}deg)`;
    document.getElementById('sec').style.transform = `rotate(${sRotation}deg)`;
}

// Call the function initially to display the time immediately
displayTime();

// Update the time every second
setInterval(displayTime, 1000);


