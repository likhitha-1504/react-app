import {useState} from "react"
import Header from "./components/Header"
import Todoinput from "./components/Todoinput"
import TodoList from "./components/TodoList"

function App(){
  const [todos,setTodos] = useState([])

  const handleAddTodo = (newTodo) => {
    setTodos([...todos,newTodo])
  }

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_,i)=>i !== index))
  }

  return(
    <div className="app-container">
    <Header/>
    <Todoinput addTodo={handleAddTodo}/>
    <TodoList todos={todos} deleteTodo={handleDeleteTodo}/>
    </div>
  )
}
export default App