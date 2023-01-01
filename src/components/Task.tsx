import React from 'react'
import { ItASK } from '../interfaces'


interface Props {
  oneTask: ItASK ,
  completeTask (taskNameToDelete : string) : void
}






const Task = ({ oneTask , completeTask }: Props) => {

  const deleteTask = ():void => {
    completeTask(oneTask.TodoName)
  }

  return (
    <div className='task'>
      <div className='content'>
        <span> {oneTask.TodoName} </span>
        <span> {oneTask.deadLine} </span>
        
        
      </div>
      <button onClick={deleteTask}> X </button>


    </div>
  )
}

export default Task