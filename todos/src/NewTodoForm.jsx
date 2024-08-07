import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
    const [formData, setFormData] = useState({ name: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(formData);
        setFormData({ name: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Todo:</label>
            <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodoForm;
