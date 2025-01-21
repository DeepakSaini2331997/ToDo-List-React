import { useState } from "react"
function App() {
  const [inputVal,setInputVal] = useState("")
  const [task,setTask] = useState([])

  const handleFormSubmit=(e)=>{
   e.preventDefault()
   if(!inputVal) return;
   if(task.includes(inputVal)) return;

   setTask((prev)=>[...prev,inputVal])
   setInputVal("")
   //console.log(setTask)
  }
  const deleteToDoList =(res)=>{
    //console.log(res," ++++")
    const result = task.filter((data)=> data !== res)
    setTask(result);
  }
  const editToDoList =(res)=>{
    setInputVal(res)
    deleteToDoList(res)
  }
  return (
    <div style={{textAlign:"center"}}>
      <h1>Todo-List</h1>
      <section>
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="todo list" value={inputVal} onChange={(e)=>setInputVal(e.target.value)} />
          <button type="submit">Add</button>
        </form>
      </section>
      <section>
        <ul style={{listStyle:"none"}}>
        {
          task.map((res,index)=>{
            return <li key={index} style={{padding:"5px",margin:"5px auto"}}>
              <span style={{marginRight:"5px",textTransform:"capitalize"}}>{res}</span>
              <span style={{marginRight:"5px"}}>
                <button onClick={()=>deleteToDoList(res)}>Delete</button>
              </span>
              <span>
                <button onClick={()=>editToDoList(res)}>Edit</button>
              </span>
            </li>
          })
        }
        </ul>
      </section>
    </div>
  );
}

export default App;
