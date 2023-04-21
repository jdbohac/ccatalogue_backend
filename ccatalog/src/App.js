import axios from "axios";
import React, { useEffect, useState } from "react";
import './App.css';

function App() {
const [tools, setTools] = useState([])


const getTools = () => {
  axios.get('https://cc-api.herokuapp.com/tools').then((response) => {
    setTools(response.data)
  })
}
useEffect(() =>{
  getTools()
},[])
  return (
    <>
      <h1>hello world!</h1>
    </>
  );
}

export default App;
