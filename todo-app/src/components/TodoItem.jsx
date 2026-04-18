import React from "react";

function TodoItem({todo,index,deleteTodo}){
    return(
        <div className="todo-item">
           <p className="todo-text"> {todo} </p>
           <button className="btn-delete" onClick={()=>deleteTodo(index)}>Delete</button>
        </div>
    )
}
export default TodoItem