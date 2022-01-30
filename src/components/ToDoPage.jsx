import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function ToDoPage() {
    const [todos, setTodos] = useState([]);

    function addTodo(todo) {
        // adds new todo to beginning of todos array
        setTodos([todo, ...todos]);
    }

    function removeTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    function toggleComplete(id) {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            })
        );
    }

    React.useEffect(() => {
        console.log({ todos });
    }, [todos]);

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <TodoList
                todos={todos}
                removeTodo={removeTodo}
                toggleComplete={toggleComplete}
            />
        </div>
    );
}

export default ToDoPage;
