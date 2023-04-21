import axios from "axios";
import React, { useEffect, useState } from "react";
import AddTool from './AddTool'
import ListTools from "./ListTools";
import ShowTool from "./ShowTool"
import {Button} from '@mui/material'


const Tools = () => {

const [view, setView] = useState('list')
const [tools, setTools] = useState([])
const [oneTool, setOneTool] = useState({})
const [showAdd, setShowAdd] = useState(false)

const getTools = () => {
  axios.get('https://cc-api.herokuapp.com/tools').then((response) => {
    setTools(response.data)
  })
}
const getOneTool = (id) => {
  axios.get('https://cc-api.herokuapp.com/tools/' + id).then((response) => {
    setOneTool(response.data) 
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


const showList = () => {
  setView('list')
}
const showTool = (id) => {
  getOneTool(id)
  showToolView(id)
}
const showToolView = (id) => {
  setView(id)
}

const toggleShowAdd = () =>{
  setShowAdd(!showAdd)
}

  return (
    <div>
      <Button onClick={toggleShowAdd}>Add Tool</Button>
      {showAdd ?
      <AddTool createTool={createTool} />
      :null}
      {view === 'list' ? 
      <ListTools showTool={showTool} tools={tools} />
      : 
      <ShowTool showList={showList} tool={oneTool} />
      }
    </div>
  )
}

export default Tools