import { Box, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const AddTodo = () => {
  return (
    <Flex
      bgColor="whitesmoke"
      color="blackAlpha.800"
      boxShadow="lg"
      w="70%"
      align='center'
      p='3'
      borderRadius='15px'
    >
      {/* <Input  size='lg' type='checkbox' w="10%" border='1px solid black'/>            */}
      <Box size="lg" w="10%">
        <Link to='/addTodo'>
        <input type="checkbox" />
        </Link>
      </Box>
      <Text>Create a new todo...</Text>
    </Flex>
  );
};

export default AddTodo;
