let myHeaders = new Headers();

myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjFlNWIyMmJlMzcyZTAwMTc3ZWJiNDEiLCJpYXQiOjE2NTg1MDg3NDZ9.51D6GmeRHLkOHOG4ruhEst7INxDHXcYZLSiRWuarwFY"
);
myHeaders.append("Content-Type", "application/json");

const requestOptions = {
  method: "DELETE",
  headers: myHeaders,
  redirect: "follow"
};

export const deleteTask = (id) =>
  fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

const fetchFunction = (property) => {
  console.log(property);
};
