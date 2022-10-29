import React from "react";
import TodoList from "./Components/TodoList";
import UserList from "./Components/UserList";

// npm i @types/react-redux redux react-redux redux-thunk(для асинхронных action) axios(для отправки запросов)

const App = () => {
  return (
    <div>
      <UserList />
      <br />
      <TodoList />
    </div>
  );
};

export default App;
