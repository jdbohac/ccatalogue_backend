import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'

const EditConsumable = (props) => {
const [consumable, setConsumable] = useState(props.consumable)

const handleChange = (event) => {
  let newConsumable = {...consumable, [event.target.name]:event.target.value}
  setConsumable(newConsumable)
}
const handleSubmit = (event) => {
  event.preventDefault()
  props.updateConsumable(consumable)
}
  return (
    <>
        <Box
        component="form"
        onSubmit={handleSubmit}
        >
        <TextField
            value={props.consumable.name}
            label="Name of Consumable Item"
            name="name"
            onChange={handleChange}
            />
            <br />
            <br />
        <TextField
            value={props.consumable.qty}
            label="Quantity"
            name="qty"
            onChange={handleChange}
            />
            <br />
            <br />
        <TextField
            value={props.consumable.brand}
            label="Brand"
            name="brand"
            onChange={handleChange}
            />
            <br />
            <br />
        <TextField
            value={props.consumable.link}
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

export default EditConsumable