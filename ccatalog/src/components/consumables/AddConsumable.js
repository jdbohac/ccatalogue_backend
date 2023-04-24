import React, { useState } from 'react'
import { Box, Button, Grid, Modal, Paper, TextField } from '@mui/material'

const AddConsumable = (props) => {
let blankConsumable = {name:'', brand:'', qty:'', link:''}
const [consumable, setConsumable] = useState(blankConsumable)

const handleChange = (event) => {
  let newConsumable = {...consumable, [event.target.name]:event.target.value, tool_id:props.tool.id}
  setConsumable(newConsumable)
}
const handleSubmit = (event) => {
  event.preventDefault()
  props.createConsumable(consumable)
  props.toggleConsForm()
} 
  return (
    <>
    <Modal open={props.showConsForm}>
    <Grid container p={5} justifyContent="center" >
    <Paper>
      <Box
        pt={2}
        pl={3}>
      <p onClick={props.toggleConsForm}>close</p>
    </Box>
        <Box
        p={2}
        component="form"
        onSubmit={handleSubmit}
        >
        <TextField
            label="Name of Consumable Item"
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

export default AddConsumable