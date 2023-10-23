import { ADD_TODO, EDIT_TODO } from "./actionTypes"
export const  addTodoAction=(payload)=>{
    return {type:ADD_TODO,payload}
}
export const  editTodoAction=(payload)=>{
    return {type:EDIT_TODO,payload}
}
export const addTodo=(todo)=>(dispatch)=>{
    dispatch(addTodoAction(todo))
}

export const editTodo=(todos)=>(dispatch)=>{
    dispatch(editTodoAction(todos))
}