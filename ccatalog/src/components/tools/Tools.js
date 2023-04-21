import axios from "axios";
import React, { useEffect, useState } from "react";
import AddTool from './AddTool'

const Tools = () => {

const [tools, setTools] = useState([])


const getTools = () => {
  axios.get('https://cc-api.herokuapp.com/tools').then((response) => {
    setTools(response.data)
  })
}
const createTool = (newTool) => {
  axios.post('https://cc-api.herokuapp.com/tools', newTool).then((response) => {
    console.log(response)
  })
}

useEffect(() =>{
  getTools()
},[])

  return (
    <div>
    
    
      <AddTool createTool={createTool} />
    </div>
  )
}

export default Tools