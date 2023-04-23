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
            <Grid container pl={2} style={{ backgroundColor: "grey" }} textAlign="left">
              <Paper color="secondary">
        <h1>Calhoun Catalog</h1>
        </Paper>
      </Grid>
              <Grid container style={{ backgroundColor: "grey" }} justifyContent="center">
              <Paper color="secondary">
          <Typography mx={5} display="inline" onClick={() => setView('tools')}>tools</Typography>
                <Typography mx={5} display="inline" onClick={() => setView('materials')}>materials</Typography>
              </Paper>
              </Grid>
      <Grid container p={2} justifyContent="space-around">
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
