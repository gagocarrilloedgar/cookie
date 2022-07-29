import { useEffect, useState } from "react";

import { getAllTasks } from "./getAllTasks";
import { addTask } from "./addTask";
import { login } from "./login";
import { deleteTask } from ".//deleteTask";

// https://documenter.getpostman.com/view/8858534/SW7dX7JG#97c7e1ce-0a37-4d6d-89af-aba8f34f1f4c

export const PostmanAPI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllTasks().then((res) => setData(res.reverse()));
  }, []);

  const handleDelete = async (id) => {
    setData((res) => res.filter((task) => task._id !== id));

    await deleteTask(id);
  };

  return (
    <div>
      <div style={{ position: "fixed", left: "400px" }}>
        <button style={{ marginRight: "10px" }} onClick={login}>
          Login
        </button>
        <button onClick={() => addTask("This is a new item")}>Add</button>
      </div>

      {data && data.length !== 0 && (
        <div style={{ height: "10px" }}>
          {data.map((item) => (
            <div key={item._id} style={{ display: "flex", margin: "10px" }}>
              <h6 style={{ marginRight: "10px" }}>
                {item.completed.toString()} - {item.description}{" "}
              </h6>
              <button onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
