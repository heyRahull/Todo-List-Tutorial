import { React, useState } from "react";
import "./TodoAddDelete.css";

const TodoAddDelete = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [deletedTodos, setDeltedTodos] = useState([]);

  const handleAdd = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };

  const handleDelete = (index) => {
    const updatedList = todos.filter((ele, i) => {
      return i != index;
    });
    setTodos(updatedList);

    const deletedList = todos.filter((ele, i) => {
      return i == index;
    });
    setDeltedTodos([...deletedTodos, deletedList]);
  };

  return (
    <div>
      {" "}
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>
      <div className="container">
        <h1>Your Tasks</h1>
        <ul>
          {todos.map((todo, index) => {
            return (
              <div key={index} className="list-container">
                <li>{todo}</li>
                <button onClick={() => handleDelete(index)}>Remove</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="container">
        <h1>Completed Tasks</h1>
        <ul>
          {deletedTodos.map((todo, index) => {
            return (
              <div key={index} className="list-container">
                <li className="list-striked">{todo}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoAddDelete;
