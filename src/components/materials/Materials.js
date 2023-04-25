import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import AddMaterial from './AddMaterial'
import EditMaterial from './EditMaterial'

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
    <Grid item xs={10} textAlign="center">
        <Typography variant='h3' style={{ backgroundImage:"url('https://img.freepik.com/premium-photo/stainless-steel-texture_3249-1418.jpg')", width:"80%", height:"150%", margin:"auto"}} color="primary.dark">Materials</Typography>
      </Grid>
      <Grid item xs= {12}>
      <AddMaterial getMaterials={getMaterials} />
      </Grid>
      {materials.map(material => {
        return (
          <Fragment key={material.id}>
           
            <Grid item lg={4} xs={12} mt={2}>
              <Paper>
                <Box p={3}>
                <EditMaterial material={material} getMaterials={getMaterials} />
                  <Typography variant='h4'>{material.dimension}</Typography>
                  <Typography variant='h4' color="secondary.light">{material.metal}</Typography>
                  <Box textAlign="right">
                    <Typography variant='h5'>pcs: {material.qty}</Typography>
                    <Button variant='outlined'>Order More</Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Fragment>
        )
      })}
    </>
  )
}

export default Materials