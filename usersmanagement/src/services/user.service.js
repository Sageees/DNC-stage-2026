const crypto = require("crypto");
const fs = require("fs");

function findAllUsers() {
  const data = fs.readFileSync("./src/db/users.json", "utf8");
  const users = JSON.parse(data);
  return users;
}

// find/details
function findUserById(id) {
  const users = findAllUsers();
  // for (const user of users) {
  //   if (user.id === id) {
  //     return user;
  //   } else {
  //     false;
  //   }
  // }
    // .find
  const user = users.find((u) => u.id === id);
  return user
}
// create
function createUser(user) {
  const users = findAllUsers();
  users.push(user);
  fs.writeFileSync("src/db/users.json", JSON.stringify(users));
}



// update
function updateUserById(id , user) {
  let users = findAllUsers();
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users[i] = user;
    }
  }

  fs.writeFileSync("src/db/users.json", JSON.stringify(users));
}

// delete

function deleteUserById(id) {
  let users = findAllUsers();
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users.splice(i, 1);
    }
  }
  fs.writeFileSync("src/db/users.json", JSON.stringify(users));
}

function processUsers(users, callback) {
  for (const user of users) {
    callback(user);
  }
}
module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  updateUserById,
  deleteUserById,
  processUsers,
};
