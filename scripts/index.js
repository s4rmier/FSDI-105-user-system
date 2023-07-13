function init() {
  readUsers();
}

let logInInputs = [$("#log-in-email"), $("#log-in-password")];
let [$logInEmail, $logInPass] = logInInputs;

clearFormData(logInInputs);

function isRegistered(username, password) {
  let isUserRegistered = false;
  const registeredUserList = readUsers();

  registeredUserList.forEach((registered) => {
    if (
      registered.email == username.val() &&
      registered.password == password.val()
    ) {
      console.log(`Registered: ${registered.email}, Logged: ${username.val()}`);
      console.log(
        `Registetred: ${registered.password}, Logged: ${password.val()}`
      );
      isUserRegistered = true;
    }
  });

  return isUserRegistered;
}

function login() {
  if (!validateFormData(logInInputs)) {
    alert("Please enter valid input");
  } else if (!isRegistered($logInEmail, $logInPass)) {
    // check if user is registered
    alert("Incorrect Username/Password");
  } else {
    // trigger successful log in event
    console.log("Successfully logged in!");
    clearFormData(logInInputs);
    window.location.href = "./users.html";
  }
}

$("#log-in-button").on("click", login);
window.onload = init;
