import { List } from "@material-ui/core";
import React from "react";

import Todo from "../components/Todo";
function TodoList({ todos }) {
  return (
    <List>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          
        />
      ))}
    </List>
  );
}

export default TodoList;