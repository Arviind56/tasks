async function fetchData() {
  try {
    let response = await fetch("./user.json");
    let data = await response.json();
    return data.users;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

async function login(username, pass) {
  let fetchedData = await fetchData();

  console.log(fetchedData);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let user = fetchedData.find(
        (data) => data.username === username && data.password === pass
      );
      // console.log(user)
      if (user) {
        resolve(user);
      } else {
        reject(new Error("Invalid username or password"));
      }
    }, 1000);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit").addEventListener("submit", handleLogin);
});

async function handleLogin(e) {
  e.preventDefault(); // Prevent default form submission
  let user = document.getElementById("name").value;
  let password = document.getElementById("email").value;
  console.log(user + " " + password);
  try {
    let user1 = await login(user, password);
    console.log(`user logged in ${user1.name}`);
  } catch (error) {
    console.error("login error :", error.message);
  }
}
async function fetchData() {
  try {
    let response = await fetch("./user.json");
    let data = await response.json();
    return data.users;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

async function login(username, pass) {
  let fetchedData = await fetchData();

  //   console.log(fetchedData);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let user = fetchedData.find(
        (data) => data.username === username && data.password === pass
      );
      // console.log(user)
      if (user) {
        resolve(user);
      } else {
        reject(new Error("Invalid username or password"));
      }
    }, 1000);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit").addEventListener("submit", handleLogin);
});

async function handleLogin(e) {
  e.preventDefault();
  let user = document.getElementById("name").value;
  let password = document.getElementById("email").value;
  try {
    let user1 = await login(user, password);
    alert(`Welcome User ${user1.username}`);
    window.open("./signup.html");
  } catch (error) {
    alert(`Credentials  are invalid: ${error.message}`);
  }
}
