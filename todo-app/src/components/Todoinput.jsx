import { useState } from "react"

function Todoinput({addTodo}){
    const [todo,setTodo] = useState("")

    const handleChange = () =>{
        if(todo.trim() !== ""){
            addTodo(todo)
            setTodo("")
        }
    }
    
    return(
        <div className="todo-input-container">
        <input type="text" placeholder="Enter your todo..." className="todo-input"
        value={todo} onChange={e=>setTodo(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleChange()}/>
        <button className="btn-add" onClick={handleChange}>Add</button>
        </div>
    )
}
export default Todoinput