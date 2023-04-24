import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const ListTools = (props) => {

  return (
    <>
    {props.tools.map(tool => {
      return(
      <Grid item md={4} xs={10} mt={2} key={tool.id} onClick={() => props.showTool(tool.id)}>
      <Paper>
      <Box p={3}>
        <h2>{tool.name}</h2>
        <Typography color="text.secondary">Brand: {tool.brand}</Typography>
        <Box textAlign="right">
            <p>Qty: {tool.qty}</p>
            </Box>
            </Box>
          </Paper >
      </Grid>
      )
      })}
    </>
  )
}

export default ListTools