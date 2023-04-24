import React, { useState } from 'react'
import { Box, Button, Modal, TextField, Paper, Grid } from '@mui/material'
import axios from 'axios'


const AddMaterial = (props) => {
const [showAdd, setShowAdd] = useState(false)
  let emptyMaterial = { metal: '', dimansion: '', qty: '', link: '' }
  const [material, setMaterial] = useState(emptyMaterial)
  
  const createMaterial = (createdMaterial) => {
    axios.post('http://cc-api.herokuapp.com/materials', createdMaterial).then((response) => {
      console.timeLog(response)
    })
  }
  
  const handleChange = (event) => {
    let newMaterial = { ...material, [event.target.name]: event.target.value }
    setMaterial(newMaterial)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    createMaterial(material)
    props.getMaterials()
    toggleShowAdd()
  }
  const toggleShowAdd = () => {
    setShowAdd(!showAdd)
  }
  return (
    <>
    <Button variant='contained' onClick={toggleShowAdd}>Add Material</Button>
    
      <Modal open={showAdd}>
        <Grid container p={5} justifyContent="center">
          <Paper>
            <Box pl={3} pt={2} onClick={toggleShowAdd} >close</Box>
            <Box
              p={5}
              component="form"
              onSubmit={handleSubmit}
            >
              <TextField
                label="Type of Metal"
                name="metal"
                onChange={handleChange}
              />
              <br />
              <br />
              <TextField
                label="Dimensions"
                name="dimension"
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

export default AddMaterial