import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTodo } from "../redux/action";

export const CreateTodo = () => {
  const [todo, setTodo] = useState("");
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const data = useSelector((store) => store.reducer.todos);
  const handleSubmit=(e)=>{
    e.preventDefault()
    let obj={
        id:Date.now(),
        title:todo,
        status:false
    }
    // data.push(obj)
    dispatch(addTodo(obj))
    console.log(obj)
    console.log(data)
    navigate('/')
  }
  return (
    <Box w="30%" m="auto" bgColor="whitesmoke" color="black" borderRadius='15px' p='5'>
        <h1>Create your Todo</h1>
      <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column"}}>
        <label htmlFor=""></label>
        <input
          type="text"
          placeholder="Enter your Todo"
          onChange={(e) => setTodo(e.target.value)}
          style={{width:"70%" , margin:"auto", border:"1px solid black"} }
        />
        <input type="submit" value="AddTodo" style={{width:"30%" , margin:"auto"} } />
      </form>
    </Box>
  );
};
