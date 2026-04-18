import React from "react";
import TodoItem from "./TodoItem";

function TodoList({todos,deleteTodo}){
    return(
        <div className="todo-list">
            {todos.length === 0 ? (
                <p className="empty-state">No tasks yet. Add one above!</p>
            ) : (
                todos.map((todo,index)=>(<TodoItem key={index} todo={todo} index={index} deleteTodo={deleteTodo}/>))
            )}
        </div>
    )
}
export default TodoList 