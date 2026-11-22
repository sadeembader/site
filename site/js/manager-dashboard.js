var offeringsBody = document.getElementById("offerings-body");

var categoryNames = {
  workshop: "ورشة",
  challenge: "تحدي",
  tournament: "بطولة"
};

function showOfferings() {
  var offerings = JSON.parse(localStorage.getItem("offerings"));
  if (offerings == null) {
    return;
  }

  var rows = "";
  for (var i = 0; i < offerings.length; i++) {
    rows += "<tr>";
    rows += "<td>" + offerings[i].name + "</td>";
    rows += "<td>" + categoryNames[offerings[i].category] + "</td>";
    rows += "<td><strong>" + offerings[i].price + "</strong> ريال</td>";
    rows += "</tr>";
  }

  offeringsBody.innerHTML += rows;
}

showOfferings();
