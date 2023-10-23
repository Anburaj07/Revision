import {  Flex } from '@chakra-ui/react'
import React from 'react'
import AddTodo from '../components/AddTodo'
import { Todos } from '../components/Todos'

const Home = () => {
  return (
    <Flex width="70%" p="4" mt='3' h='500px' m='auto' align="center" flexDirection='column' bgColor="red.100" gap='10%' borderRadius='15px'>
        <AddTodo/>
        <Todos/>
    </Flex>
  )
}

export default Home