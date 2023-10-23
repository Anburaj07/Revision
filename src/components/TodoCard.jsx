import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editTodo } from '../redux/action';

const TodoCard = ({title,status,id}) => {

  let data = useSelector((store) => store.reducer.todos);
  const [todos,setTodos]=useState(data)
  const dispatch=useDispatch();
  const handleClick=()=>{
    let res=todos.map((el)=>{
      if(el.id==id){
        el.status=true
      }
      return el
    })
    console.log(res)
    console.log(res)
    dispatch(editTodo(res))
    // setTodos(res)
  }
  return (
    <Flex mt="3" borderBottom='1px solid black' p='3'>
        <input type="checkbox" onClick={handleClick}/>
        <Text>{title}</Text>
    </Flex>
  )
}

export default TodoCard