import { useState } from "react";

const NewTask = ({ handleAddTask }) => {

    const [newTask, setNewTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim()) {
            handleAddTask(newTask);
            setNewTask("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nueva tarea..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button type="submit">Agregar Tarea</button>
        </form>
    );
};

export default NewTask;
