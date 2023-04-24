import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const ListTools = (props) => {

  return (
    <>
    {props.tools.length ? 
    <>
    {props.tools.map(tool => {
      return(
      <Grid item md={4} xs={10} mt={2} key={tool.id} onClick={() => props.showTool(tool.id)}>
      <Paper>
      <Box p={3}>
        <Typography variant='h3'>{tool.name}</Typography>
        <Typography color="secondary.light" variant='h5'>Brand: {tool.brand}</Typography>
        <Box textAlign="right">
            <p>Qty: {tool.qty}</p>
            </Box>
            </Box>
          </Paper >
      </Grid>
      )
      })}
      </>
      : null}
    </>
  )
}

export default ListTools