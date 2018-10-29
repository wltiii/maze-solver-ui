import {createMuiTheme} from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue';
import blueGrey from '@material-ui/core/colors/blueGrey';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: blueGrey,
        error: red,
        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    
        // primary: {
        //     light: '#76d275',
        //     main: '#43a047',
        //     dark: '#00701a',
        //     contrastText: '#000'
        // },
        // secondary: {
        //     light: '#ff6f60',
        //     main: '#e53935',
        //     dark: '#ab000d',
        //     contrastText: '#000'
        // }
    }
})

export default theme