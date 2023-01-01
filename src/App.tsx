import { ChangeEvent, FC, useState } from 'react';
import './App.css';
import Task from './components/Task';
import {ItASK} from './interfaces'




const App: FC = () => {

  const [task , setTask] = useState <string> ("") ;
  const [DeadLine , setDeadLine] = useState <number> (0) ;
  const [todo , setTodo] = useState<ItASK[]>([])  

  const handleChange = (e : ChangeEvent <HTMLInputElement> ) : void => {
    if (e.target.name === 'task') {
      setTask(e.target.value)
    }else{
      setDeadLine(Number(e.target.value))
    }
  }

  const addTask = () : void => {
    const newTask = {TodoName:task , deadLine : DeadLine }
    setTodo([...todo,newTask])   
    console.log(todo)
    setTask('')
    setDeadLine(0)
  }

  const completeTask = (taskNameToDelete : string) : void => {
    setTodo(todo.filter(tasks => tasks.TodoName != taskNameToDelete ))
  }
 


  return (
    <div className="App">
      
      <div className='header'>
        <div className='inputCon'>
          <input type="text" name='task' value={task} placeholder='Task...' onChange={handleChange} />
          <input type='number' name='deadLine' value={DeadLine} placeholder='DeadLine (in Days)...' onChange={handleChange}/>
        </div>
        <button onClick={addTask}> Add Task </button>
      </div>
      
      <div className='todoList'>
        {
          todo.map((oneTask :ItASK , i: number )=> <Task oneTask={oneTask} completeTask={completeTask} key={i}/> )
        }
      </div>
    
    </div>
  );
}

export default App;
