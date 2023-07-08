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
    grade103
  ) {
    this.email = email;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.grade101 = grade101;
    this.grade102 = grade102;
    this.grade103 = grade103;
  }
}

const userArr = [];

function register() {
  if (
    $eMail.val() == "" ||
    $password.val() == "" ||
    $firstName.val() == "" ||
    $lastName.val() == "" ||
    $age.val() == "" ||
    $grade101.val() == "" ||
    $grade102.val() === "" ||
    $grade103.val() == ""
  ) {
    alert("Enter Valid Input");
  } else {
    userArr.push(
      new User(
        $eMail.val(),
        $password.val(),
        $firstName.val(),
        $lastName.val(),
        $age.val(),
        $grade101.val(),
        $grade102.val(),
        $grade103.val()
      )
    );
    saveUser(userArr);
  }

  console.log(userArr);
  clearFormData();
}

function clearFormData() {
  $eMail.val(""),
    $password.val(""),
    $firstName.val(""),
    $lastName.val(""),
    $age.val(""),
    $grade101.val(""),
    $grade102.val(""),
    $grade103.val("");
}

function init() {}

window.onload = init;
