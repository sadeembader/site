
function showWeeklyPuzzle() {
    document.getElementById("puzzle-box").style.display = "block";
    document.getElementById("start-puzzle").style.display = "none";
}

function checkWeeklyPuzzle() {
    var answer = document.getElementById("puzzle-answer").value;
    var result = document.getElementById("puzzle-result");

    // Ignore spaces when comparing answers
    answer = answer.replace(/\s/g, "");

    if (answer == "") {
        result.innerHTML = "يرجى كتابة إجابتك أولاً.";
    } else if (answer == "حفرة" || answer == "الحفرة") {
        result.innerHTML = "إجابة صحيحة! أحسنت!";
    } else {
        result.innerHTML = "إجابة غير صحيحة، حاول مرة أخرى.";
    }
}

document.getElementById("start-puzzle").onclick = showWeeklyPuzzle;
document.getElementById("check-puzzle").onclick = checkWeeklyPuzzle;
