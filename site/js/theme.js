
function applyTheme(theme) {
    var button = document.getElementById("theme-button");

    if (theme == "light") {
        document.body.className = "light-theme";

        if (button != null) {
            
button.innerHTML = "🌙";

        }
    } else {
        document.body.className = "";

        if (button != null) {
            
button.innerHTML = "☀️";

        }
    }
}

function switchTheme() {
    if (document.body.className == "light-theme") {
        applyTheme("dark");
        localStorage.setItem("areeb-theme", "dark");
    } else {
        applyTheme("light");
        localStorage.setItem("areeb-theme", "light");
    }
}

var savedTheme = localStorage.getItem("areeb-theme");
applyTheme(savedTheme);

var themeButton = document.getElementById("theme-button");

if (themeButton != null) {
    themeButton.onclick = switchTheme;
}
