const form = document.querySelector(".join-request form");
const offering = document.getElementById("offering");
const fullname = document.getElementById("fullname");
const date = document.getElementById("date");
const requests = [];
const requestsList = document.getElementById("requests-list");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (offering.value === "") {
    alert("يرجى اختيار النشاط.");
    return;
}
const namePattern = /^[A-Za-z\u0600-\u06FF]+(?:\s+[A-Za-z\u0600-\u06FF]+)+$/;

if (!namePattern.test(fullname.value.trim())) {
    alert("يرجى إدخال الاسم الكامل بدون أرقام أو رموز.");
    return;
}
const selectedDate = new Date(date.value);
const today = new Date();

today.setHours(0, 0, 0, 0);

if (date.value === "" || selectedDate <= today) {
    alert("يرجى اختيار تاريخ بعد تاريخ اليوم.");
    return;
}
const stayOnPage = confirm(
    "تم إرسال الطلب بنجاح.\nاضغط موافق للبقاء في الصفحة، أو إلغاء للرجوع إلى لوحة العضو."
);
if (stayOnPage === false) {
    window.location.assign("./member-dashboard.html");
    return;
}
const newRequest = {
    offering: offering.options[offering.selectedIndex].text,
    name: fullname.value.trim(),
    date: date.value
};

requests.push(newRequest);
requestsList.innerHTML = "<h3>الطلبات المضافة</h3>";

for (let i = 0; i < requests.length; i++) {
    requestsList.innerHTML +=
        "<p>النشاط: " + requests[i].offering +
        " | الاسم: " + requests[i].name +
        " | التاريخ: " + requests[i].date + "</p>";
}
form.reset();
});
