const hello = alert("Shnorhakalutyun mez haycelelu hamar")

let users = JSON.parse(localStorage.getItem("users"));

function Usersss() {
  const info = document.getElementById("info");
  if (users.length === 0) {
    info.innerHTML = "No data";
    return;
  }
  info.innerHTML = users
    .map((user, i) =>
      `<div>${user.name} ${user.surname} <button class="deletbutton" onclick="deleteUser(${i})">Delete</button><button class="editbutton" onclick="editUser(${i})">Edit</button></div>`
    )
    .join("");
}

function deleteUser(index) {
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  Usersss();
}

function saveUser() {
  const nameInput = document.getElementById("nameInput");
  const surnameInput = document.getElementById("surnameInput");
  
  const name = nameInput.value;
  const surname = surnameInput.value;
  
  users.push({ name, surname });
  localStorage.setItem("users", JSON.stringify(users));
  
  nameInput.value = "";
  surnameInput.value = "";
  
  const ii = alert("DUQ HAJOXUTYUMB GRANCVEL EQ👌")
  Usersss();
}

function editUser(i) {
  const user = users[i];
  
  document.getElementById("nameInput").value = user.name;
  document.getElementById("surnameInput").value = user.surname;
  edit = i;
  const kk = alert("✅")
}

deleteUser();