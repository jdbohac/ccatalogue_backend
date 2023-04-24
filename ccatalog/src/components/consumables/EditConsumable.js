import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'

const EditConsumable = (props) => {
const [consumable, setConsumable] = useState(props.consumable)

const deleteConsumable = (event) => {
  axios.delete('https://cc-api.herokuapp.com/consumables/' + event.target.value).then((response) => {
    console.log(response)
    props.getOneTool(props.tool.id)
  })
}

const handleChange = (event) => {
  let newConsumable = {...consumable, [event.target.name]:event.target.value}
  setConsumable(newConsumable)
}
const handleSubmit = (event) => {
  event.preventDefault()
  props.updateConsumable(consumable)
  props.toggleConsEdit()
}
  return (
    <>
        <Box
        p={2}
        component="form"
        onSubmit={handleSubmit}
        >
        <TextField
            value={consumable.name}
            label="Name of Consumable Item"
            name="name"
            onChange={handleChange}
            />
        <TextField
            value={consumable.qty}
            label="Quantity"
            name="qty"
            onChange={handleChange}
            />
            <br />
            <br />
        <TextField
            value={consumable.brand}
            label="Brand"
            name="brand"
            onChange={handleChange}
            />
        <TextField
            value={consumable.link}
            label="Purchase link"
            name="link"
            onChange={handleChange}
            />
            <br />
            <Button type='submit'>Submit</Button>
            <Box textAlign="right">
            <Button variant='outlined' value={consumable.id} onClick={deleteConsumable}>Delete</Button>
        </Box>
      </Box>
    </>
  )
}

export default EditConsumable