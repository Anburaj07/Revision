
import './App.css';

import { Box } from "@chakra-ui/react";
import AllRoutes from "./components/AllRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Box bgColor="blue.500" height='900px'>
        <Navbar />
        <AllRoutes />
      </Box>
     </div>
  );
}

export default App;

