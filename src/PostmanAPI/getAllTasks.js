let myHeaders = new Headers();

myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjFlNWIyMmJlMzcyZTAwMTc3ZWJiNDEiLCJpYXQiOjE2NTg0OTA2MzB9.LKzin8MnhZYeYdZHZfIqVCo07Y48FBjRizYQGn8IBv4"
);
myHeaders.append("Content-Type", "application/json");

const getOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

export const getAllTasks = () =>
  fetch("https://api-nodejs-todolist.herokuapp.com/task", getOptions)
    .then((response) => response.json())
    .then((result) => result.data)
    .catch((error) => console.log("error", error));
