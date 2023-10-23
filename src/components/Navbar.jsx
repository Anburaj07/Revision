import React from "react";
import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Flex
      minWidth="max-content"
      p="2"
      align="center"
      justify="space-around"
      color="white"
    >
      <Link to="/">
        <Box p="2">
          <Heading size="md">TODO</Heading>
        </Box>
      </Link>
      <MoonIcon boxSize={6} />
    </Flex>
  );
};

export default Navbar;
