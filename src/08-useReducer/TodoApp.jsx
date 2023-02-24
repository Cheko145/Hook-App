import { useEffect, useReducer } from "react"
import { useTodo } from "../Hooks/useTodo";
import { TodoAdd,TodoList,todoReducer } from "./index";



export const TodoApp = () => {
  

    const {todos,pendingTodosCount,handleDeleteTodo,todosCount,handleNewTodo,handleToggleTodo}=useTodo();
 
 return (
    <>
        <h1>TodoApp: {todosCount}, <small>pendientes:{pendingTodosCount} </small></h1>
        <hr />
        
        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} 
                onDeleteTodo={handleDeleteTodo}
                onToggletodo={handleToggleTodo}
                />
            </div>
        
            <div className="row-5">
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd 
                onNewTodo={handleNewTodo} 
                />
            </div>
        </div>
    </>
  )
}
