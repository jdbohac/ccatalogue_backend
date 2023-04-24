import axios from "axios";
import React, { useEffect, useState } from "react";
import './App.css';
import Tools from "./components/tools/Tools";
import Materials from "./components/materials/Materials";
import theme from "./themes/color_theme.js"
import { Box, Grid, Paper, Typography, ThemeProvider, CssBaseline } from "@mui/material";

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
              <Grid container justifyContent="center">
          <Typography mx={5} display="inline" onClick={() => setView('tools')}>tools</Typography>
                <Typography mx={5} display="inline" onClick={() => setView('materials')}>materials</Typography>
            </Grid>
          </Paper>
      <Grid container spacing={2} p={2} justifyContent="space-around">
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
