

function validateJoinForm() {
    var name = document.getElementById("join-name").value;
    var photo = document.getElementById("join-photo").value;
    var birthDate = document.getElementById("join-dob").value;
    var email = document.getElementById("join-email").value;
    var expertise = document.getElementById("join-expertise").value;
    var skills = document.getElementById("join-skills").value;
    var education = document.getElementById("join-education").value;

    // Check for empty fields
    if (name.search(/^\s*$/) != -1 || photo == "" || birthDate == "" ||
        email.search(/^\s*$/) != -1 || expertise.search(/^\s*$/) != -1 ||
        skills.search(/^\s*$/) != -1 || education.search(/^\s*$/) != -1) {
        alert("يرجى تعبئة جميع الحقول.");
        return false;
    }

    // Name cannot start with a number
    if (name.search(/^\s*[0-9٠-٩]/) != -1) {
        alert("الاسم لا يمكن أن يبدأ برقم.");
        return false;
    }

    // Check common image file extensions
    if (photo.search(/\.(jpg|jpeg|png|gif|webp|bmp|svg|avif|tif|tiff)$/i) == -1) {
        alert("يرجى رفع صورة فقط.");
        return false;
    }

    // Birth year must be 2008 or earlier
    if (parseInt(birthDate.substring(0, 4)) > 2008) {
        alert("يجب أن تكون سنة الميلاد 2008 أو قبلها.");
        return false;
    }

    alert("تم إرسال طلب الانضمام بنجاح باسم: " + name);
    return false;
}

document.getElementById("join-form").onsubmit = validateJoinForm;
