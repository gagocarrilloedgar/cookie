import { useEffect, useState } from "react";

const API_URL = "https://assets.breatheco.de/apis/fake/todos/user/alesanchezr";

// Initilization of our TodoList component
async function fetchData() {
  const response = await fetch(API_URL).catch(() => false);
  return response ? response.json() : [];
}

// Methods

// In order to update the data we need to call the fetch API with a PUT method request
const udpateFetch = (todos) =>
  fetch(API_URL, {
    method: "PUT",
    body: JSON.stringify(todos),
    headers: {
      "Content-Type": "application/json"
    }
  }).catch((err) => {
    console.log(err);
    return false;
  });

const updateData = async (todos) => {
  const resp = await udpateFetch(todos);

  if (!resp) {
    alert("Error updating data");
    return resp;
  }

  const data = await resp.json();
  alert(data.result);
  return true;
};

export const TodoList = () => {
  // Local state
  const [todos, setTodos] = useState(() => [
    {
      label: "Some label",
      done: false
    },
    {
      label: "Some label 2",
      done: false
    }
  ]);

  const handleFetch = async (newTodos) => {
    // We set the local state
    setTodos(newTodos);

    // We update the data in the API (DB)
    const data = await updateData(newTodos);

    // If the data is not updated we go back to the previous state
    if (!data) setTodos(todos);
  };

  // DELETE
  const handleDelete = async (label) => {
    const newTodos = todos.filter((todo) => todo.label !== label);
    await handleFetch(newTodos);
  };

  // POST
  const handleAddTodo = async () => {
    const newTodos = [...todos, { label: Date.now(), done: false }];
    await handleFetch(newTodos);
  };

  // The initlization of our local state
  useEffect(() => {
    // Get all the data from the API  --> Pass it to my local state so I can play with it
    fetchData().then((data) => setTodos(data));
  }, []);

  // We let the user know what is going on
  if (!todos || todos.length === 0) return <h1>...Loading</h1>;

  return (
    <div>
      <button name="add" onClick={handleAddTodo}>
        Add
      </button>
      {todos.map((todo) => (
        <div key={todo.label}>
          <h1>{todo.label}</h1>
          <button onClick={() => handleDelete(todo.label)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
