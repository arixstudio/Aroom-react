import { createTheme } from '@mui/material/styles';
import { green, grey } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
      light: grey[200],
    },
    secondary: {
      main: green[500],
    },
    white: {
      main: '#ffffff'
    }
  },
});
