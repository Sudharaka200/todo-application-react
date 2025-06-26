import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

const Form = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodo();

  const SubmitForm = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text.trim());
    setText("");
  };

  return (
    <div className="text-center">
      <form onSubmit={SubmitForm} className="flex items-center space-x-2">
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          type="text"
          placeholder="Add a todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="pt-1 pb-1 pl-5 pr-5 bg-red-600 rounded-md text-white"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
