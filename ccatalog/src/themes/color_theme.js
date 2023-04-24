
import { createTheme } from '@mui/material';

const theme = createTheme ({
    palette: {
        primary: {
            main: '#b1b1aa',
            dark: '#4e4e4a',
        },
        secondary: {
            main: '#923459',
        },
        background: {
            default: '#8a8989',
            paper: '#56616f',
        },
        text: {
            primary: 'rgba(245,240,223,0.87)',
            secondary: 'rgba(241,241,204,0.54)',
        },
    },
    overrides: {
        MuiButton: {
            root: {
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                border: 0,
                borderRadius: 3,
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                color: 'white',
                height: 48,
                padding: '0 30px',
            },
        },
    },
    typography: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 600,
        fontWeightBold: 900,
        fontWeightMedium: 700,
        htmlFontSize: 16,
    },
});

export default theme