import React, { FC, useEffect } from "react";
import { useActions } from "../Hooks/useActions";
import { useTypedSelector } from "../Hooks/useTypedSelector";

const TodoList: FC = () => {
  const { error, limit, loading, page, todos } = useTypedSelector(
    (state) => state.todo
  );
  const { fetchTodos, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Downloading todos!</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} {todo.title}
        </div>
      ))}
      <div style={{ display: "flex", gap: 10 }}>
        {pages.map((p) => (
          <div key={p}
            onClick={() => setTodoPage(p)}
            style={{
              padding: 10,
              border: p === page ? "1px solid yellow" : "1px solid white",
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
