import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box } from '@mui/material';
import './App.css';

function App() {
const [tools, setTools] = useState([])


const getTools = () => {
  axios.get('https://cc-api.herokuapp.com/tools').then((response) => {
    setTools(response.data)
  })
}
const createTool = (newTool) => {
  axios.post('https://cc-api.herokuapp.com/', newTool).then((response) => {
    console.log(response)
  })
}

useEffect(() =>{
  getTools()
},[])
  return (
    <>
      <h1>hello world!</h1>
      <Box
      component="form">
      <TextField></TextField>
      
      </Box>
      
    </>
  );
}

export default App;
