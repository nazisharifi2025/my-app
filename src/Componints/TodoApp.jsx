import { useState } from "react";

export default function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  }

  return (
    <div className="h-screen w-full bg-gray-600 flex flex-col justify-center items-center space-y-4">
      <form onSubmit={handleClick} className="flex">
        <input
          type="text"
          name="Name"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="px-6 rounded-md outline-0 rounded-r-none border-r-0 py-4 border-2 border-black"
        />
        <button className="p-4 border-2 border-l-0 bg-gray-300 font-bold rounded-md rounded-l-none">
          Save
        </button>
      </form>

      {todos.map((item, index) => (
        <h1
          key={index}
          className="bg-white px-3 py-2 rounded-md text-2xl font-bold text-center mx-auto"
        >
          {item}
        </h1>
      ))}
    </div>
  );
}
