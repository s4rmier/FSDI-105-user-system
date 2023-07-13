function validateFormData(inputArr) {
  let isValid = true;
  inputArr.forEach((element) => {
    if (!element.val()) {
      isValid = false;
      element.addClass("error");
    } else {
      inputArr.forEach((element) => {
        element.removeClass("error");
      });
    }
  });
  return isValid;
}

// } else if (
//   element.is($grade101) ||
//   element.is($grade102) ||
//   element.is($grade103)
// ) {
//   const gradeValue = parseFloat(element.val());
//   if (gradeValue < 0 || gradeValue > 4) {
//     isValid = false;
//     element.addClass("error");
//   }
// }
