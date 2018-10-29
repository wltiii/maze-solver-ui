import React from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MazeInput from './MazeInput';
import Solution from './Solution';

class Home extends React.Component {

    state = {}

    handleBack = () => {
        this.setState({showSolution: false})
    }

    async handleSolve(mazeText) {
        let maze = {
            text: mazeText
        }
        try {
            const response = await axios.put('http://localhost:8080/solve', maze)
            this.setState({
                showSolution: true,
                stepsTaken: response.data.stepsTaken,
                solutionInMillis: response.data.solutionInMillis,
                solution: response.data.solution
            })
        }
        catch (error) {
            console.log(JSON.stringify(error.response))
            alert(error.response.data.message)
        }
    }

    render() {
        const {classes} = this.props
        const {showSolution, stepsTaken, solutionInMillis, solution} = this.state
        const display = showSolution ?
            <Solution handleBack={this.handleBack} solutionInMillis={solutionInMillis} stepsTaken={stepsTaken}
                      solution={solution}/> :
            <MazeInput handleSolve={this.handleSolve.bind(this)}/>

        return (
            <React.Fragment>
                <Grid container className={classes.padding}>
                    <Grid item xs={12}>
                        <Typography variant='display3' align='center'>React Maze Solver</Typography>
                    </Grid>
                    {display}
                </Grid>
            </React.Fragment>
        )
    }
}

const styles = () => ({
    center: {
        textAlign: 'center'
    },
    paddingB: {
        paddingBottom: 16
    },
    padding: {
        padding: 16
    }
})

export default withStyles(styles)(Home)