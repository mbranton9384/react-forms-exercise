import React from "react";

const Todo = ({ id, name, removeTodo }) => {
    return (
        <div>
            <span>{name}</span>
            <button onClick={() => removeTodo(id)}>X</button>
        </div>
    );
}

export default Todo;
