const raw = JSON.stringify({
  email: "muh.nurali43@gmail.com",
  password: "12345678"
});

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: raw,
  redirect: "follow"
};

export const login = () =>
  fetch("https://api-nodejs-todolist.herokuapp.com/user/login", options)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
