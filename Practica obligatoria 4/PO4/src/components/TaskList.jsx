import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, handletaskDelete, handletaskComplete }) => {

    const tasksFiltered = tasks.filter(task => task != "")
    // const tasksFilteredMapped = tasksFiltered.map(task => (
    //         <Task
    //             key={task.id}
    //             task={task}
    //             handletaskDelete={handletaskDelete}
    //             handletaskComplete={handletaskComplete}
    //         />
    //     )
    // )   
    return (
        <ul>
            {tasksFiltered.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    handletaskDelete={handletaskDelete}
                    handletaskComplete={handletaskComplete}
                />
            ))}
        </ul>
    )
}

export default TaskList;
