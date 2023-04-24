import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'

const Materials = () => {
  const [materials, setMaterials] = useState([])
  const getMaterials = () => {
    axios.get('https://cc-api.herokuapp.com/materials').then((response) => {
      setMaterials(response.data)
    })
  }
  useEffect(() => {
    getMaterials()
  }, [])
  return (
    <>
      {materials.map(material => {
        return (
          <Box key={material.id}>
            <Box>
              <Typography variant='h3' color="primary.dark">Materials</Typography>
            </Box>
            <Grid item lg={4} xs={10} mt={3}>
              <Paper>
                <Box p={3}>
                  <Typography variant='h4'>{material.dimension}</Typography>
                  <Typography variant='h4' color="secondary.light">{material.metal}</Typography>
                  <Box textAlign="right" p={2}>
                    <Typography variant='h5'>pcs: {material.qty}</Typography>
                    <Button variant='outlined'>Order More</Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Box>
        )
      })}
    </>
  )
}

export default Materials