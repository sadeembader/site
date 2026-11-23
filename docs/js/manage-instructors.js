var instructors = [
  { name: "أ. محمد القحطاني", image: "images/instructor-mohammed.png" },
  { name: "أ. حصة الغامدي", image: "images/instructor-hessa.png" },
  { name: "أ. شهد العتيبي", image: "images/instructor-shahad.png" }
];

var instructorList = document.getElementById("instructor-list");
var deleteForm = document.getElementById("delete-form");
var addForm = document.getElementById("add-form");
var nameInput = document.getElementById("new-name");
var birthInput = document.getElementById("new-birthdate");
var emailInput = document.getElementById("new-email");
var expertiseInput = document.getElementById("new-expertise");
var skillsInput = document.getElementById("new-skills");
var educationInput = document.getElementById("new-education");
var photoInput = document.getElementById("new-photo");
var photoLabel = document.getElementById("new-photo-label");
var photoPreview = document.getElementById("new-photo-preview");
var photoData = "";

function showInstructors() {
  var items = "";

  if (instructors.length == 0) {
    items = "<li>لا يوجد مدربين حاليًا.</li>";
  }

  for (var i = 0; i < instructors.length; i++) {
    items += "<li>";
    items += "<input type=\"checkbox\" id=\"instructor-" + i + "\" name=\"instructors\" value=\"" + i + "\">";
    items += "<img src=\"" + instructors[i].image + "\" alt=\"صورة " + instructors[i].name + "\" class=\"instructor-thumb\">";
    items += "<label for=\"instructor-" + i + "\">" + instructors[i].name + "</label>";
    items += "</li>";
  }

  instructorList.innerHTML = items;
}

function deleteInstructors() {
  var selectedNames = "";
  var selectedCount = 0;

  for (var i = 0; i < instructors.length; i++) {
    if (document.getElementById("instructor-" + i).checked) {
      selectedNames += "- " + instructors[i].name + "\n";
      selectedCount++;
    }
  }

  if (selectedCount == 0) {
    alert("يرجى تحديد مدرب واحد على الأقل لحذفه.");
    return false;
  }

  var answer = confirm("سيتم حذف المدربين التاليين:\n" + selectedNames + "\nهل تريد تأكيد الحذف؟");

  if (answer) {
    for (var j = instructors.length - 1; j >= 0; j--) {
      if (document.getElementById("instructor-" + j).checked) {
        instructors.splice(j, 1);
      }
    }
    showInstructors();
  }

  return false;
}

function isEmpty(text) {
  return text.replace(/\s/g, "") == "";
}

function getFileName(path) {
  return path.substring(path.lastIndexOf("\\") + 1);
}

function showPhotoName() {
  photoData = "";
  photoPreview.src = "images/instructor-placeholder.png";

  if (photoInput.value == "") {
    photoLabel.innerHTML = "تحميل صورة المدرب";
    return;
  }

  photoLabel.innerHTML = getFileName(photoInput.value);

  if (photoInput.value.search(/\.(jpg|jpeg|png|gif|webp)$/i) != -1) {
    var reader = new FileReader();
    reader.onload = function () {
      photoData = reader.result;
      photoPreview.src = reader.result;
    };
    reader.readAsDataURL(photoInput.files[0]);
  }
}

function clearAddForm() {
  nameInput.value = "";
  birthInput.value = "";
  emailInput.value = "";
  expertiseInput.value = "";
  skillsInput.value = "";
  educationInput.value = "";
  photoInput.value = "";
  photoLabel.innerHTML = "تحميل صورة المدرب";
  photoPreview.src = "images/instructor-placeholder.png";
  photoData = "";
}

function checkTextField(value, fieldName) {
  if (isEmpty(value)) {
    return "- حقل " + fieldName + " فارغ.\n";
  }
  if (value.search(/^\s*[0-9٠-٩]/) != -1) {
    return "- حقل " + fieldName + " لا يمكن أن يبدأ برقم.\n";
  }
  if (value.search(/[a-zA-Zء-ي]/) == -1) {
    return "- حقل " + fieldName + " يجب أن يحتوي على حروف.\n";
  }
  return "";
}

function addInstructor() {
  var name = nameInput.value;
  var birthDate = birthInput.value;
  var email = emailInput.value;
  var expertise = expertiseInput.value;
  var skills = skillsInput.value;
  var education = educationInput.value;
  var photoPath = photoInput.value;
  var errors = "";

  if (isEmpty(name)) {
    errors += "- حقل الاسم الكامل فارغ.\n";
  } else if (name.search(/^[a-zA-Zء-ي\s]+$/) == -1) {
    errors += "- الاسم يجب أن يحتوي على حروف فقط بدون أرقام أو رموز.\n";
  } else if (name.search(/[a-zA-Zء-ي]\s+[a-zA-Zء-ي]/) == -1) {
    errors += "- اكتب الاسم الكامل (الاسم الأول واسم العائلة).\n";
  }

  if (birthDate == "") {
    errors += "- حقل تاريخ الميلاد فارغ.\n";
  } else {
    var dateParts = birthDate.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    var today = new Date();
    var todayNumber = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    var birthNumber = parseInt(dateParts[1]) * 10000 + parseInt(dateParts[2]) * 100 + parseInt(dateParts[3]);
    if (parseInt(dateParts[1]) < 1900) {
      errors += "- سنة الميلاد غير صحيحة.\n";
    } else if (birthNumber >= todayNumber) {
      errors += "- تاريخ الميلاد يجب أن يكون قبل تاريخ اليوم.\n";
    }
  }

  if (isEmpty(email)) {
    errors += "- حقل البريد الإلكتروني فارغ.\n";
  } else if (email.search(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) == -1) {
    errors += "- البريد الإلكتروني غير صحيح، مثال: name@email.com\n";
  }

  errors += checkTextField(expertise, "مجال الخبرة");
  errors += checkTextField(skills, "المهارات");
  errors += checkTextField(education, "التعليم");

  if (photoPath == "") {
    errors += "- لم يتم تحميل صورة المدرب.\n";
  } else if (photoPath.search(/\.(jpg|jpeg|png|gif|webp)$/i) == -1) {
    errors += "- ملف صورة المدرب يجب أن يكون صورة (jpg أو png أو gif).\n";
  }

  if (errors != "") {
    alert("لا يمكن إضافة المدرب، يرجى تصحيح التالي:\n\n" + errors);
    return false;
  }

  var newInstructor = {
    name: "أ. " + name,
    image: photoData,
    birthDate: birthDate,
    email: email,
    expertise: expertise,
    skills: skills,
    education: education
  };

  instructors.push(newInstructor);
  showInstructors();

  alert("تمت إضافة " + newInstructor.name + " إلى قائمة المدربين بنجاح.");
  clearAddForm();
  return false;
}

showInstructors();
deleteForm.onsubmit = deleteInstructors;
addForm.onsubmit = addInstructor;
photoInput.onchange = showPhotoName;
