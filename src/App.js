import axios from "axios";
import React, { useEffect, useState } from "react";
import './App.css';
import Tools from "./components/tools/Tools";
import Materials from "./components/materials/Materials";
import theme from "./themes/color_theme.js"
import { Box, Grid, Paper, Button, ThemeProvider, CssBaseline } from "@mui/material";

function App() {
  const [view, setView] = useState('tools')
  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline>
          <Grid container >
            <Paper color="secondary" style={{width:"100%"}}>
            <Grid container pl={2} textAlign="left">
        <h1>Calhoun Catalog</h1>
      </Grid>
              <Grid container spacing={10} justifyContent="center">
              <Grid item>
          <Button display="inline" onClick={() => setView('tools')}>tools</Button>
                </Grid>
                <Grid item>
                <Button display="inline" onClick={() => setView('materials')}>materials</Button>
                </Grid>
            </Grid>
          </Paper>
      <Grid container spacing={2} p={2} justifyContent="center">
        {view === 'tools' ?
          <Tools />
          : view === 'materials' ?
            <Materials />
          : null}
      </Grid>
      </Grid>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
