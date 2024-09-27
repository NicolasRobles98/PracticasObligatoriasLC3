import React from "react";


const Task =({task, handletaskDelete, handletaskComplete})=>{
   
    return(
        <div style={{ textDecoration: task.completed ? "line-through" : "", backgroundColor: task.completed ? "lightgreen" : "lightgrey",  }}>
            {/* <p>{task.title}</p> */}
            {task.name}
            <button onClick={() => handletaskDelete(task.id)}>Borrar</button>
            <button onClick={() => handletaskComplete(task.id)}>{task.completed ? "Desmarcar" : "Completada"}
            </button>
        </div>
    )
}

export default Task;
