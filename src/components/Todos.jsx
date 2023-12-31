import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";
import { Box, Flex, Text } from "@chakra-ui/react";

export const Todos = () => {
  let data = useSelector((store) => store.reducer.todos);
  const [todos, setTodos] = useState(data);
  console.log(data, "in homr");

  // useEffect(()=>{
  //   handleActive()
  // },[data])

  const handleAll = () => {
    setTodos(data);
  };
  const handleActive = () => {
    let activeData = data.filter((el) => {
      if (el.active) {
        return el;
      }
    });
    setTodos(activeData);
  };

  const handleCompleted = () => {
    let activeData = data.filter((el) => {
      if (el.status) {
        return el;
      }
    });
    setTodos(activeData);
  };
  const handleClearCompleted = () => {};
  return (
    <Box mt="5" bgColor="whitesmoke" color="black" w="70%">
      {todos.map((el) => (
        <TodoCard {...el} />
      ))}
      <Flex p="4" justify="space-around">
        <Text
          color="blackAlpha.600"
          _hover={{
            fontWeight: "semibold",
          }}
        >
          {todos.length}itesm left
        </Text>
        <Text
          color="blackAlpha.600"
          _hover={{
            fontWeight: "semibold",
          }}
          onClick={handleAll}
        >
          All
        </Text>
        <Text
          color="blackAlpha.600"
          _hover={{
            fontWeight: "semibold",
          }}
          onClick={handleActive}
        >
          Active
        </Text>
        <Text
          color="blackAlpha.600"
          _hover={{
            fontWeight: "semibold",
          }}
          onClick={handleCompleted}
        >
          Completed
        </Text>
        <Text
          color="blackAlpha.600"
          _hover={{
            fontWeight: "semibold",
          }}
          onClick={handleClearCompleted}
        >
          Clear Completed
        </Text>
      </Flex>
    </Box>
  );
};
