const form = document.querySelector(".evaluation-form form");
const offering = form.querySelector("select");
const feedback = form.querySelector("textarea");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (offering.value === "") {
    alert("يرجى اختيار النشاط.");
    return;
}
const rating = form.querySelector('input[name="rating"]:checked');

if (!rating) {
    alert("يرجى اختيار التقييم.");
    return;
}
if (feedback.value.trim() === "") {
    alert("يرجى كتابة ملاحظتك.");
    return;
}
const ratingValue = Number(rating.value);

if (ratingValue >= 4) {
    alert("شكرًا لتقييمك، سعدنا بأن التجربة نالت إعجابك.");
} else {
    alert("نعتذر أن التجربة لم تكن بالمستوى المطلوب، وشكرًا لملاحظتك.");
}

window.location.assign("./member-dashboard.html");
});