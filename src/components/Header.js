import React from 'react'
import { Paper, Grid, Button, Typography,  } from '@mui/material'
const Header = (props) => {
  return (
    <>
      <Paper color="secondary" style={{ width: "100%" }}>
        <Grid container pl={2} textAlign="left">
          <Typography fontFamily="tilt prism" fontWeight="200" variant="h3">Calhoun Catalog</Typography>
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