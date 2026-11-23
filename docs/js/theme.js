

function applyTheme(theme) {
    if (theme == "light") {
        document.body.className = "light-theme";
    } else {
        document.body.className = "";
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
