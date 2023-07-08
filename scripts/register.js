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
    avg
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
  }
}

const userArr = [];

function register() {
  if (
    //validate if input is valid
    $eMail.val() == "" ||
    $password.val() == "" ||
    $firstName.val() == "" ||
    $lastName.val() == "" ||
    $age.val() == "" ||
    $grade101.val() == "" ||
    $grade102.val() === "" ||
    $grade103.val() == "" || //validate if grade entered is greater than 4 or less than 0
    $grade101.val() > 4 ||
    $grade102.val() > 4 ||
    $grade103.val() > 4 ||
    $grade101.val() < 0 ||
    $grade102.val() < 0 ||
    $grade103.val() < 0
  ) {
    alert("Enter Valid Input");
    return;
  } else {
    // if input is valid record user to array
    let averageGrade =
      (parseFloat($grade101.val()) +
        parseFloat($grade102.val()) +
        parseFloat($grade103.val())) /
      3;

    userArr.push(
      new User(
        $eMail.val(),
        $password.val(),
        $firstName.val(),
        $lastName.val(),
        $age.val(),
        $grade101.val(),
        $grade102.val(),
        $grade103.val(),
        averageGrade
      )
    );
    saveUser(userArr);
  }
  clearFormData();
}

function clearFormData() {
  $eMail.val("");
  $password.val("");
  $firstName.val("");
  $lastName.val("");
  $age.val("");
  $grade101.val("");
  $grade102.val("");
  $grade103.val("");
}

function init() {}

window.onload = init;
