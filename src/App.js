import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import Users from "./components/Users";
import LoginForm from "./components/LoginForm";

import RegistrationForm from "./components/RegistrationForm";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { createStore, combineReducers } from "redux";
import { Navigate } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import ToDoPage from "./components/ToDoPage";
import store from "./store";

function App() {
    //  const store = createStore(rootReducer, applyMiddleware(thunk));

    const [error, setError] = useState("");

    const [todos, setTodos] = useState([]);

    function addTodo(todo) {
        // adds new todo to beginning of todos array
        setTodos([todo, ...todos]);
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

    function removeTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    // de facut router cu react-router-dom
    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route
                            exact
                            path="/login"
                            element={<LoginForm />}
                            error={error}
                        />
                        <Route path="/" element={<Navigate to="/login" />} />
                        <Route path="/toDo" element={<ToDoPage />} />
                        <Route path="/test" element={<Users />} />

                        <Route
                            exact
                            path="/register"
                            element={<RegistrationForm />}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
