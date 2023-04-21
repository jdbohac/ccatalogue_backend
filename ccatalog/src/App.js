import axios from "axios";
import React, { useEffect, useState } from "react";
import AddTool from "./components/tools/AddTool";
import './App.css';
import Tools from "./components/tools/Tools";
import Materials from "./components/materials/Materials";
import { Box } from "@mui/material";

function App() {
const [view, setView] = useState('tools')
  return (
    <>
      <h1>hello world!</h1>
      <Box>
      <p onClick={() => setView('tools')}>tools</p>
      <p onClick={() => setView('materials')}>materials</p>
      </Box>
      
      {view === 'tools' ?
      <Tools />
    : view === 'materials' ?
      <Materials />
    : null}
    </>
  );
}

export default App;
