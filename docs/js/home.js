
function showTime() {
    var currentTime = new Date();
    document.getElementById("clock").innerHTML =
        currentTime.toLocaleTimeString();
}

showTime();

setInterval(showTime, 1000);

function backToTop() {
    window.scrollTo(0, 0);
}

window.onscroll = function() {
    var button = document.getElementById("backToTop");

    if (document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};
