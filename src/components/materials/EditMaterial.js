import React, { useState } from 'react'
import { Box, Button, Modal, TextField, Paper, Grid } from '@mui/material'
import axios from 'axios'


const EditMaterial = (props) => {
  const [showEdit, setShowEdit] = useState(false)
  const [material, setMaterial] = useState(props.material)

  const updateMaterial = (updatedMaterial) => {
    axios.put('http://cc-api.herokuapp.com/materials/' + props.material.id, updatedMaterial).then((response) => {
      console.log(response)
      props.getMaterials()
      toggleShowEdit()
    })
  }
  const deleteMaterial = (event) => {
    axios.delete('http://cc-api.herokuapp.com/materials/' + event.target.value).then((response) => {
      console.log(response)
      props.getMaterials()
    })
  }


  const handleChange = (event) => {
    let newMaterial = { ...material, [event.target.name]: event.target.value }
    setMaterial(newMaterial)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    updateMaterial(material)
  }
  const toggleShowEdit = () => {
    setShowEdit(!showEdit)
  }
  return (
    <>
      <Button onClick={toggleShowEdit}>Edit</Button>

      <Modal open={showEdit}>
        <Grid container p={5} justifyContent="center">
          <Paper>
            <Box pl={3} pt={2} onClick={toggleShowEdit} >close</Box>
            <Box
              p={5}
              component="form"
              onSubmit={handleSubmit}
            >
              <TextField
                value={material.metal}
                label="Type of Metal"
                name="metal"
                onChange={handleChange}
              />
              <br />
              <br />
              <TextField
                value={material.dimension}
                label="Dimensions"
                name="dimension"
                onChange={handleChange}
              />
              <br />
              <br />
              <TextField
                value={material.qty}
                label="Quantity"
                name="qty"
                onChange={handleChange}
              />
              <br />
              <br />
              <TextField
                value={material.link}
                label="Purchase link"
                name="link"
                onChange={handleChange}
              />
              <br />
              <Button style={{ color: '#d0a9a9' }} type='submit'>Submit</Button>
              <Button style={{ color: '#d0a9a9' }} value={material.id} onClick={deleteMaterial}>Delete</Button>
            </Box>
          </Paper>
        </Grid>
      </Modal>
    </>
  )
}

export default EditMaterial