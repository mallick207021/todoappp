import './App.css';
import React, {useState} from 'react';

function App() {
  const [task, setTask] = useState('')
  const [description,setDescription] = useState('')
  const [mainTask, setMainTask] = useState([])

  const submitHandler=(e)=>{e.preventDefault()
  //console.log(task)
  //console.log(description)
  setMainTask ([...mainTask, {task, description}])
  console.log(mainTask)
setTask('')
setDescription('') }

const deleteHandler = (id)=>{
  let copyTask = [...mainTask]
  copyTask.splice(id, 1)
  setMainTask(copyTask)}

  //const deleteHandler =(index)=>{
    //const updatedTask = mainTask.filter((_, id) => id !== index)
    //setTask(updatedTask)}


let renderTask = <h2>No Tasks Available</h2>

if (mainTask.length > 0) {
  renderTask = mainTask.map((props, id)=>{
    return(
      <li key={id} className='flex mb-8 items-center justify-between'>
        <div className='flex items-center justify-between mb-5 w-2/3'>
        <h4 className='text-2xl font-bold'>{props.task}</h4>
        <h6 className='text-lg font-semibold'>{props.description}</h6>
      </div>
      <button className='bg-black text-white font-bold rounded px-4 py-2'
      onClick={()=>{deleteHandler(id)}}
      >Delete</button>
      </li>
    )
  }) 
}

  return (
    <div>
      <h1 className='bg-black p-5 text-white text-5xl text-center font-bold'>
      Task Manager</h1>
      <form onSubmit={submitHandler}>
        <input 
        type='text' 
        placeholder='Enter your task...'
        className='px-4 py-2 text-black text-xl text-center font-bold border-2 m-8 border-zinc-800 '
        value={task}
        onChange={(e)=>setTask(e.target.value)} /> 
      <input 
        type='text' 
        placeholder='Enter description...'
        className='px-4 py-2 text-black text-xl text-center font-bold border-2 m-8 border-zinc-800 '
        value={description}
        onChange={(e)=>setDescription(e.target.value)} />
      <button className='bg-black text-white m-5 px-4 py-3 text-2xl font-bold rounded' >Add Task</button>
      </form>
      <hr/>
      <div className=' p-8 bg-gray-300 text-2xl text-bold'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </div>
  );
}

export default App;
