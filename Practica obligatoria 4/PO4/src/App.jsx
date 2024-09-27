import { useState } from 'react'


import NewTask from './components/NewTask';
import TaskList from './components/TaskList';



const  App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  };

  const handletaskComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
    

  const handletaskDelete = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks);
  };

  return (
    <>
      <NewTask
        handleAddTask={handleAddTask}
      />
      <TaskList
        tasks = {tasks}
        handletaskDelete = {handletaskDelete}
        handletaskComplete = {handletaskComplete}
      />
    </>
  )
}

export default App
