import React, { useMemo } from "react";
import { TodoProvider, useTodo } from "./context/TodoContext";
import TodoForm from "./components/Form";
import TodoList from "./components/TodoList";

const TodoCount = () => {
  const { todos } = useTodo();
  const count = useMemo(() => todos.length, [todos]);

  return <p className="mt-5 font-bold text-2xl">All Todos: {count}</p>;
};

const AppContent = () => (
  <>
    <div className="">
      <div className="">
        <h1 className="text-center text-red-800 font-bold text-5xl mt-10">Todo App</h1>
      </div>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <TodoForm />
          <TodoCount />
          <TodoList />
        </div>
      </div>
    </div>
  </>
);

const App = () => (
  <TodoProvider>
    <AppContent />
  </TodoProvider>
);

export default App;
