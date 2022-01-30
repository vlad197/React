import React, { useState } from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import "../App.css";

function Todo({ todo, toggleComplete, removeTodo }) {
    const [style, setStyle] = useState("border");
    function handleCheckboxClick() {
        toggleComplete(todo.id);
        setStyle("verde");
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }
    return (
        <ListItem style={{ display: "flex" }}>
            <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
            <div className={style}>
                <Typography>{todo.task}</Typography>
            </div>
            <IconButton onClick={handleRemoveClick}>
                <CloseIcon />
            </IconButton>
        </ListItem>
    );
}

export default Todo;
