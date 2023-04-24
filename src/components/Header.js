import React from 'react'
import { Paper, Grid, Button,  } from '@mui/material'
const Header = (props) => {
  return (
    <>
      <Paper color="secondary" style={{ width: "100%" }}>
        <Grid container pl={2} textAlign="left">
          <h1>Calhoun Catalog</h1>
        </Grid>
        <Grid container spacing={10} justifyContent="center">
          <Grid item>
            <Button display="inline" onClick={() => props.setView('tools')}>tools</Button>
          </Grid>
          <Grid item>
            <Button display="inline" onClick={() => props.setView('materials')}>materials</Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default Header