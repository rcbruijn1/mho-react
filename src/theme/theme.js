import { createMuiTheme } from '@material-ui/core/styles';
import raleway from 'typeface-raleway';

export const createTheme = createMuiTheme({
    palette: {
        default: '#7E8A9D',
        common: {
            white: '#FFF',
            black: '#212121',
        },
        text: {
            primary: '#212121',
            secondary: '#FFF',
        },
        primary: {
            // light: '#69C5FB',
            main: '#007F99',
            // dark: '#1887C7',
        },
        secondary: {
            // light: '#B2F0EB',
            main: '#FF4D88',
            // dark: '#52BAB1',
        },
    },
    typography: {
        fontFamily: '"Raleway"',
    },
    overrides: {
        MuiCssBaseline: {
          "@global": {
            "@font-face": [raleway]
          }
        },
        MuiListItem: {
          gutters: {
            paddingLeft: 24,
            paddingRight: 24,
          },
        },
      },
      mixins: {
        scrollbar: {
          '&::-webkit-scrollbar': {
            width: 10,
            background: 'rgba(255, 77, 136, 0.22) !important',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(255, 77, 136, 0.62) !important',
            borderRadius: 4,
          },
        },
      },
});