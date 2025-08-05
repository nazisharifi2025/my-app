import { useState } from "react";

export default function Formf({ todos, settodos }) {
  const [todo, settodo] = useState({ todo: "", img: null, done: false });

  function handelClick(e) {
    e.preventDefault();
    settodos([...todos, todo]);
    settodo({ todo: "", img: null, done: false });
  }

  function handelFile(e) {
    const file = e.target.files[0];
    if (file) {
      const urlimg = URL.createObjectURL(file);
      settodo((prev) => ({
        ...prev,
        img: urlimg,
      }));
    }
  }

  return (
    <div>
      <form onSubmit={handelClick} className="flex flex-col gap-5 h-fit px-12 py-16 shadow-md shadow-gray-600">
        <div className="w-full flex flex-col">
        <label htmlFor="" className="font-bold text-xl">BOOK NAEM</label>
        <input
          placeholder="Search your Book"
          type="text"
          name="Name"
          value={todo.todo}
          onChange={(e) =>
            settodo((prev) => ({
              ...prev,
              todo: e.target.value,
              done: false,
            }))
          }
          className="px-24 rounded-md outline-0 font-bold text-xl py-4 shadow-md shadow-gray-900 rounded-r-none border-black"
        />
        </div>
        <div className="w-full flex flex-col">
        <label htmlFor="" className="font-bold text-xl">IMGURL</label>
        <input
          placeholder="Search your Book"
          type="file"
          accept="image/*"
          name="image"
          onChange={handelFile}
          className="px-24 rounded-md outline-0 font-bold text-xl py-4 shadow-md shadow-gray-900 rounded-r-none border-black"
        />
        </div>
        <button className="p-4 shadow-md shadow-gray-700 bg-gray-400 text-xl font-bold rounded-md rounded-l-none text-white">
          Search
        </button>
      </form>
    </div>
  );
}
