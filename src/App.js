import axios from "axios";
import React, { useEffect, useState } from "react";
import './App.css';
import Tools from "./components/tools/Tools";
import Materials from "./components/materials/Materials";
import theme from "./themes/color_theme.js"
import { Box, Grid, Paper, Button, ThemeProvider, CssBaseline } from "@mui/material";
import Header from "./components/Header";

function App() {
  const [view, setView] = useState('tools')
  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline>
      <Grid container spacing={2} p={2} justifyContent="center">
        {view === 'tools' ?
          <Tools 
            setMainView={setView}  />
          : view === 'materials' ?
            <Materials setMainView={setView} />
          : null}
      </Grid>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
