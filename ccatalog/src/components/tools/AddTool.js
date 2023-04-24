import React, { useState } from 'react'
import { Box, Button, Modal, TextField, Paper, Grid } from '@mui/material'


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
    <Modal open={props.showAdd}>
        <Grid container p={5} justifyContent="center">
          <Paper>
            <Box pl={3} pt={2} onClick={props.toggleShowAdd} >close</Box>
        <Box
        p={5}
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
          </Paper>
        </Grid>
      </Modal>
    </>
  )
}

export default AddTool