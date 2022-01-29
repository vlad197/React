import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

function Todo({ todo }) {
 
 

  return (
    <ListItem style={{ display: "flex" }}>
      
      <Typography
        
      >
        {todo.task}
      </Typography>
      
    </ListItem>
  );
}

export default Todo;