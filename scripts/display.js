function displayUsers(userArray) {
  const $tableBody = $("#usersTable tbody");
  userArray.forEach((element) => {
    element.avg = parseFloat(element.avg);
    let tr = $("<tr></tr>");
    tr.append(`<td>${element.email}</td>`);
    tr.append(`<td>${element.firstname + " " + element.lastname}</td>`);
    tr.append(`<td>${element.age}</td>`);
    tr.append(`<td>(${Number(element.avg)}) ${element.lettergrade}</td>`);
    if (element.avg < 2) {
      tr.addClass("failing");
    }
    $tableBody.append(tr);
  });
}

function init() {
  let userList = readUsers();
  displayUsers(userList);
}
window.onload = init;
