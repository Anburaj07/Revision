import { ADD_TODO, EDIT_TODO } from "./actionTypes"

let data=[
    {id:1,title:'Learn JavaScript',status:false,active:true},
    {id:2,title:'Learn React',status:false,active:false},
    {id:3,title:'Learn Chakra',status:false,active:true},
]

const initState={
    todos:data,
    loading:false,
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case ADD_TODO:{
            return{
                ...state,todos:[...state.todos,payload]
            }
        }
        case EDIT_TODO:{
            return{
                ...state,todos:payload
            }
        }
        default:{
            return state
        }
    }
}