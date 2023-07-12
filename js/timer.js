
var deadline = new Date("jule 31, 2023 15:37:25").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("day").innerHTML = + days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME UP";
        document.getElementById("day").innerHTML = '0';
        document.getElementById("hour").innerHTML = '0';
        document.getElementById("minute").innerHTML = '0';
        document.getElementById("second").innerHTML = '0';
    }
    if (days.toString().length < 2) {
        document.getElementById("day").innerHTML = "0" + days;
    };
    if (hours.toString().length < 2) {
        document.getElementById("hour").innerHTML = "0" + hours;
    };
    if (minutes.toString().length < 2) {
        document.getElementById("minute").innerHTML = "0" + minutes;
    };
    if (seconds.toString().length < 2) {
        document.getElementById("second").innerHTML = "0" + seconds;
    };
}, 1000);