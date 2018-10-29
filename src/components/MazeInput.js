import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button'
import mazes from '../resources/Mazes'
import { withStyles } from '@material-ui/core/styles';
import Instructions from './Instructions'
import Help from './Help'

class MazeInput extends React.Component {

    state = {}

    btnClick = btnNum => {
        let mazeNum = 'maze' + btnNum
        this.setState({mazeIn: mazes[mazeNum]})
    }

    inputClear = () => {
        this.setState({mazeIn: ''})
    }

    onInputChange = event => {
        this.setState({mazeIn: event.target.value})
    }

    render() {
        const {classes} = this.props
        let {mazeIn} = this.state
        return (
            <React.Fragment>
                <Instructions/>
                <Grid container justify='center' className={classes.paddingB}>
                    <Grid item xs={11}>
                        <Paper elevation={8} square className={classes.padding}>
                            <Input
                                value={mazeIn}
                                onChange={this.onInputChange}
                                autoFocus
                                disableUnderline
                                multiline
                                fullWidth
                                rows={20}
                                rowsMax={45}
                                placeholder='Enter your maze layout'
                                classes={{
                                    input: classes.center
                                }}
                            />
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container justify='center' spacing={16} className={classes.paddingB}>
                    <Grid item>
                        <Button variant='contained' color='primary' disabled={!mazeIn} onClick={() => this.props.handleSolve(mazeIn)}>Solve Maze</Button>
                    </Grid>
                    <Grid item>
                        <Button variant='contained' color='secondary' onClick={this.inputClear}>Clear</Button>
                    </Grid>
                </Grid>
                <Help/>
            </React.Fragment>
        )
    }
}

const styles = () => ({
    center: {
        textAlign: 'center',
        fontFamily: 'monospace',
        fontSize: '0.9rem'
    },
    paddingB: {
        paddingBottom: 16
    },
    padding: {
        padding: 16
    }
})

export default withStyles(styles)(MazeInput)