import { useState } from "react";

const API_URL = "https://assets.breatheco.de/apis/fake/todos/user/alesanchezr";

const updateData = (todos) =>
  fetch(API_URL, {
    method: "PUT",
    body: JSON.stringify(todos),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((resp) => {
      // console.log(resp.ok); // will be true if the response is successfull
      // console.log(resp.status); // the status code = 200 or code = 400 etc.
      return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then((data) => {
      //here is were your code should start after the fetch finishes
      alert(data.result); //this will print on the console the exact object received from the server
    })
    .catch((error) => {
      //error handling
      console.log(error);
    });

export const TodoListNew = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleValueChange = (e) => setValue(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodos = [...todos, { label: value, done: false }];
    setTodos(newTodos);
    updateData(newTodos);
  };

  const handleDone = (label) => {
    const newTodos = todos.filter((todo) => todo.label !== label);
    const newTodosDone = todos.map((todoItem) => {
      if (todoItem.label === label)
        return { label: todoItem.label, done: true };

      return todoItem;
    });

    setTodos(newTodos);
    updateData(newTodosDone);
  };

  return (
    <>
      <hr />
      <h1>Todo List</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={handleValueChange} />
      </form>
      {todos.map((todo) => (
        <div
          key={todo.label}
          style={{ margin: "10px", display: "flex", alignItems: "center" }}
        >
          <h5>{todo.label}</h5>
          <button onClick={() => handleDone(todo.label)}> Delete </button>
        </div>
      ))}
    </>
  );
};
