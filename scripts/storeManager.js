const KEY = "users";

function saveUser(user) {
  let usersList = readUsers();
  usersList.push(user);
  let val = JSON.stringify(usersList);
  localStorage.setItem(KEY, val);
}

function readUsers() {
  let users = localStorage.getItem(KEY);
  if (!users) {
    return [];
  } else {
    let data = JSON.parse(users);
    return data;
  }
}
