import React from "react";
import { useTodo } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo } = useTodo();

  return (
    <li className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded shadow-sm mb-2">
      <span>{todo.text}</span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-600 hover:text-red-800 font-semibold"
        aria-label={`Delete todo ${todo.text}`}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
