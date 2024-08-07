import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
    const INITIAL_STATE = [];

    const [todos, setTodos] = useState(INITIAL_STATE);
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, { ...newTodo, id: uuid() }]);
    }
    const removeTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }
    return (
        <div>
            <h3>Todo List</h3>
            <NewTodoForm addTodo={addTodo} />
            <div>
                {todos.map(({ id, name }) => (
                    <Todo id={id} name={name} key={id} removeTodo={removeTodo} />
                ))}
            </div>
        </div>
    )
}

export default TodoList;

