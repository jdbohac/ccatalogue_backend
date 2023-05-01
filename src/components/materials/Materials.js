import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import AddMaterial from './AddMaterial'
import EditMaterial from './EditMaterial'
import MaterialsSearch from './MaterialsSearch'

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
      <Grid item md={9} textAlign="center" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/stainless-steel-texture_3249-1418.jpg')", height: "8rem", maxWidth: "25rem", margin: "auto", borderRadius:"0 0 8px 8px" }}>
        <Typography mt={5} variant='h3' fontFamily="tilt prism" fontWeight="400" color="primary.dark">Materials</Typography>
      </Grid>
      <Grid container justifyContent="space-between">
      <Grid item m={2} xs= {8}>
      <AddMaterial getMaterials={getMaterials} />
      </Grid>
      <MaterialsSearch setMaterials={setMaterials} />
      </Grid>
      {materials.map(material => {
        return (
          <Fragment key={material.id}>
           
            <Grid item md={4} xs={12} mt={2}>
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