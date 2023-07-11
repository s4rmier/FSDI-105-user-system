// acquire input data
var $eMail = $("#reg-email");
var $password = $("#reg-password");
var $firstName = $("#reg-fname");
var $lastName = $("#reg-lname");
var $age = $("#reg-age");
var $grade101 = $("#reg-grade101");
var $grade102 = $("#reg-grade102");
var $grade103 = $("#reg-grade103");

class User {
  constructor(
    email,
    password,
    firstname,
    lastname,
    age,
    grade101,
    grade102,
    grade103,
    avg,
    lettergrade
  ) {
    this.email = email;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.grade101 = grade101;
    this.grade102 = grade102;
    this.grade103 = grade103;
    this.avg = avg;
    this.lettergrade = lettergrade;
  }
}

let inputFields = [
  $eMail,
  $password,
  $firstName,
  $lastName,
  $age,
  $grade101,
  $grade102,
  $grade103,
];

function register() {
  if (!validateFormData(inputFields)) {
    alert("Enter Valid Input");
    return;
  } else {
    // if input is valid record user to array
    const averageGrade =
      (parseFloat($grade101.val()) +
        parseFloat($grade102.val()) +
        parseFloat($grade103.val())) /
      3;

    const letterGrade = gradeEquivalent(averageGrade);

    saveUser(
      new User(
        $eMail.val(),
        $password.val(),
        $firstName.val(),
        $lastName.val(),
        $age.val(),
        $grade101.val(),
        $grade102.val(),
        $grade103.val(),
        parseFloat(averageGrade).toFixed(2),
        letterGrade
      )
    );
  }
  clearFormData(inputFields);
}

function init() {
  clearFormData(inputFields);
}

window.onload = init;
