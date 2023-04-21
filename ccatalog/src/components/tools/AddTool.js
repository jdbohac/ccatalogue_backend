import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'


const AddTool = (props) => {
let emptyTool = {name:'', qty:'', brand:'', link:''}
const [tool, setTool] = useState(emptyTool)
const handleChange = (event) => {
  let newTool = {...tool, [event.target.name]: event.target.value}
  setTool(newTool)
}
const handleSubmit = (event) => {
  event.preventDefault()
  props.createTool(tool)
}
  return (
    <>
        <Box
        component="form"
        onSubmit={handleSubmit}
        >
        <TextField
            label="Name of Tool"
            name="name"
            onChange={handleChange}
            />
            <br />
            <br />
        <TextField
            label="Quantity"
            name="qty"
            onChange={handleChange}
            />
            <br />
            <br />
        <TextField
            label="Brand"
            name="brand"
            onChange={handleChange}
            />
            <br />
            <br />
        <TextField
            label="Purchase link"
            name="link"
            onChange={handleChange}
            />
            <br />
            <Button type='submit'>Submit</Button>
      </Box>
    </>
  )
}

export default AddTool