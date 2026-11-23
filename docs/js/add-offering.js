var offeringForm = document.getElementById("offering-form");
var nameInput = document.getElementById("offering-name");
var priceInput = document.getElementById("offering-price");
var categoryInput = document.getElementById("offering-category");
var descriptionInput = document.getElementById("offering-description");
var imageInput = document.getElementById("offering-image");
var imageLabel = document.getElementById("offering-image-label");
var imagePreview = document.getElementById("offering-image-preview");
var cancelButton = document.getElementById("offering-cancel");

function isEmpty(text) {
  return text.replace(/\s/g, "") == "";
}

function getFileName(path) {
  return path.substring(path.lastIndexOf("\\") + 1);
}

function showImageName() {
  imagePreview.src = "images/offering-placeholder.png";

  if (imageInput.value == "") {
    imageLabel.innerHTML = "تحميل صورة النشاط";
    return;
  }

  imageLabel.innerHTML = getFileName(imageInput.value);

  if (imageInput.value.search(/\.(jpg|jpeg|png|gif|webp)$/i) != -1) {
    var reader = new FileReader();
    reader.onload = function () {
      imagePreview.src = reader.result;
    };
    reader.readAsDataURL(imageInput.files[0]);
  }
}

function resetImageLabel() {
  imageLabel.innerHTML = "تحميل صورة النشاط";
  imagePreview.src = "images/offering-placeholder.png";
}

function clearForm() {
  nameInput.value = "";
  priceInput.value = "";
  categoryInput.value = "";
  descriptionInput.value = "";
  imageInput.value = "";
  resetImageLabel();
}

function addOffering() {
  var name = nameInput.value;
  var price = priceInput.value;
  var category = categoryInput.value;
  var description = descriptionInput.value;
  var imagePath = imageInput.value;
  var errors = "";

  if (isEmpty(name)) {
    errors += "- اسم النشاط فارغ.\n";
  } else if (name.search(/^\s*[0-9٠-٩]/) != -1) {
    errors += "- اسم النشاط لا يمكن أن يبدأ برقم.\n";
  }

  if (isEmpty(price)) {
    errors += "- السعر فارغ.\n";
  } else if (isNaN(price)) {
    errors += "- السعر يجب أن يكون رقمًا بالأرقام الإنجليزية، مثل 50.\n";
  } else if (parseFloat(price) < 0) {
    errors += "- السعر لا يمكن أن يكون أقل من 0.\n";
  }

  if (category == "") {
    errors += "- لم يتم اختيار تصنيف النشاط.\n";
  }

  if (isEmpty(description)) {
    errors += "- وصف النشاط فارغ.\n";
  }

  if (imagePath == "") {
    errors += "- لم يتم تحميل صورة النشاط.\n";
  } else if (imagePath.search(/\.(jpg|jpeg|png|gif|webp)$/i) == -1) {
    errors += "- ملف صورة النشاط يجب أن يكون صورة (jpg أو png أو gif).\n";
  }

  if (errors != "") {
    alert("لا يمكن إضافة النشاط، يرجى تصحيح التالي:\n\n" + errors);
    return false;
  }

  var offerings = JSON.parse(localStorage.getItem("offerings"));
  if (offerings == null) {
    offerings = [];
  }

  var newOffering = {
    name: name,
    price: parseFloat(price),
    category: category,
    description: description,
    image: getFileName(imagePath)
  };

  offerings.push(newOffering);
  localStorage.setItem("offerings", JSON.stringify(offerings));

  alert("تمت إضافة النشاط \"" + name + "\" بنجاح.");
  clearForm();
  return false;
}

offeringForm.onsubmit = addOffering;
imageInput.onchange = showImageName;
cancelButton.onclick = resetImageLabel;
