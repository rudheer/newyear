import { Box } from "@material-ui/core";
import React from "react";
import Imgbox from "./components/Imgbox";
import Name from "./components/Name";
import Nheading from "./components/Nheading";

function App() {
  return (
    <Box>
      <Nheading/>
      <Imgbox/>
      <Name/>
    </Box>
  );
}

export default App;
