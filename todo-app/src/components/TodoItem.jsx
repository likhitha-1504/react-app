import React from "react";

function TodoItem({todo,index,deleteTodo}){
    return(
        <div>
           <p> {todo} </p>
           <button onCliccdk={()=>deleteTodo(index)}>Delete</button>
        </div>
    )
}
export default TodoItem