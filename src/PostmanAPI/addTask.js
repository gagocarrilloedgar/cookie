let myHeaders = new Headers();

myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjFlNWIyMmJlMzcyZTAwMTc3ZWJiNDEiLCJpYXQiOjE2NTg0OTA2MzB9.LKzin8MnhZYeYdZHZfIqVCo07Y48FBjRizYQGn8IBv4"
);
myHeaders.append("Content-Type", "application/json");

export const addTask = (newItem) =>
  fetch("https://api-nodejs-todolist.herokuapp.com/task", {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ description: newItem }),
    redirect: "follow"
  })
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
