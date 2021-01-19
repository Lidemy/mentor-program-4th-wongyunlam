import { useState, useEffect, useRef } from "react";
import useInput from "./useInput";

function writeTodosToLocalStorage(todos) {
  window.localStorage.setItem("todos", JSON.stringify(todos));
}

export default function useTodos() {
  const id = useRef(1);
  const { value, setValue, handleChange } = useInput();
  const [filter, setFilter] = useState("all");

  const [todos, setTodos] = useState(() => {
    let todoData = window.localStorage.getItem("todos") || [];
    if (todoData.length > 2) {
      todoData = JSON.parse(todoData);
      id.current = todoData[0].id + 1;
    } else {
      todoData = [];
    }
    return todoData;
  });

  const handleBtnClick = () => {
    if (!value) return alert("請輸入內容");
    setTodos([
      {
        id: id.current,
        content: value,
        isDone: false,
        isEditing: false,
      },
      ...todos,
    ]);
    setValue("");
    id.current++;
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleIsDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      })
    );
  };

  const renderAll = () => {
    setFilter("all");
  };

  const renderUndone = () => {
    setFilter("undone");
  };

  const renderDone = () => {
    setFilter("done");
  };

  const handleDeleteAll = () => {
    setTodos([]);
  };

  const handleUpdateTodo = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id !== todo.id) return item;
        return {
          ...item,
          isEditing: !item.isEditing,
        };
      })
    );
  };

  const handleEditChange = (id, e) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          content: e.target.value,
        };
      })
    );
  };

  useEffect(() => {
    writeTodosToLocalStorage(todos);
  }, [todos]);

  return {
    filter,
    setFilter,
    id,
    todos,
    setTodos,
    handleBtnClick,
    handleDeleteTodo,
    handleToggleIsDone,
    value,
    setValue,
    handleChange,
    handleDeleteAll,
    renderAll,
    renderUndone,
    renderDone,
    handleEditChange,
    handleUpdateTodo,
  };
}
