import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

export default createMuiTheme({
  typography: {
    useNextVariants: true,
    color: 'rgb(255, 255, 255)',
  },
  palette: {
    type: 'dark',
    primary: {
      main: 'rgba(53, 229, 196, 0.57)'
    },
    secondary: blue,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    contrastText: 'rgb(255, 255, 255)',
  }
});
