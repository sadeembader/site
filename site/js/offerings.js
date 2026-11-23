
var offerings = [
    {
        name: "بطولة النادي",
        image: "images/activity1.png",
        alt: "كأس تحيط به رموز وشفرات",
        description: "منافسة جماعية في حل التحديات.",
        price: 0,
        category: "championships"
    },
    {
        name: "ورشة التشفير",
        image: "images/activity4.png",
        alt: "قفل مفتوح ومفتاح ورموز مشفرة",
        description: "تعلم أساسيات التشفير بطريقة ممتعة وتطبيقية.",
        price: 250,
        category: "workshops"
    },
    {
        name: "تحدي السرعة",
        image: "images/activity2.png",
        alt: "ساعة توقيت وقطع أحجية",
        description: "حل أكبر عدد من الألغاز في وقت محدود.",
        price: 20,
        category: "challenges"
    },
    {
        name: "تحدي سودوكو",
        image: "images/activity5.png",
        alt: "شبكة سودوكو بخانات وأرقام",
        description: "حل شبكة الأرقام واختبر سرعة تركيزك ومنطقك.",
        price: 0,
        category: "challenges"
    },
    {
        name: "تحدي المكعبات",
        image: "images/activity6.png",
        alt: "مكعب أحجية بأوجه بنفسجية ووردية",
        description: "حرّك ورتّب المكعبات للوصول إلى الحل بأسرع وقت.",
        price: 30,
        category: "challenges"
    },
    {
        name: "تحدي ترتيب الكلمات",
        image: "images/activity3.png",
        alt: "مكعبات تحمل حروفًا عربية",
        description: "رتّب الحروف المبعثرة لتكوين الكلمات الصحيحة واختبر سرعتك.",
        price: 20,
        category: "challenges"
    }
];

var selectedCategory = "";

function shuffleOfferings() {
    for (var i = offerings.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));

        var temp = offerings[i];
        offerings[i] = offerings[j];
        offerings[j] = temp;
    }
}

function displayOfferings() {
    var content = "";

    for (var i = 0; i < offerings.length; i++) {

        if (selectedCategory == "" ||
            offerings[i].category == selectedCategory) {

            content += '<article class="club-offering-card">' +
                '<img src="' + offerings[i].image + '" alt="' + offerings[i].alt + '" class="club-offering-image">' +
                '<div class="club-offering-content">' +
                '<h2>' + offerings[i].name + '</h2>' +
                '<p class="club-offering-description">' + offerings[i].description + '</p>' +
                '<p class="club-offering-price"><strong>' + offerings[i].price + '</strong> ريال</p>' +
                '<button type="button" class="btn-outline club-details-button">عرض التفاصيل</button>' +
                '</div></article>';
        }
    }

    document.getElementById("clubOfferingsList").innerHTML = content;
}

function sortByPrice(direction) {
    offerings.sort(function(a, b) {
        if (direction == "low") {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });

    displayOfferings();
}

function sortByName(direction) {
    offerings.sort(function(a, b) {
        if (a.name < b.name) {
            return direction == "ascending" ? -1 : 1;
        }

        if (a.name > b.name) {
            return direction == "ascending" ? 1 : -1;
        }

        return 0;
    });

    displayOfferings();
}

document.getElementById("offering-price").onchange = function() {
    var choice = document.getElementById("offering-price").value;

    if (choice == "price-low") {
        sortByPrice("low");
    } else if (choice == "price-high") {
        sortByPrice("high");
    }
};

document.getElementById("offering-name").onchange = function() {
    var choice = document.getElementById("offering-name").value;

    if (choice == "name-ascending") {
        sortByName("ascending");
    } else if (choice == "name-descending") {
        sortByName("descending");
    }
};

document.getElementById("offering-category").onchange = function() {
    selectedCategory = document.getElementById("offering-category").value;
    displayOfferings();
};

shuffleOfferings();
displayOfferings();
