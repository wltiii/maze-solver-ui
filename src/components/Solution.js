import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles'
import MazePainter from './MazePainter'

class Solution extends React.Component {

    render() {
        console.log(JSON.stringify(this.props))
        const {classes, stepsTaken, solutionInMillis, solution} = this.props
        return (
            <React.Fragment>
                <Grid container justify='center'>
                    <Typography variant='subheading' align='center' paragraph>
                        Resolution time: {solutionInMillis} (ms)
                    </Typography>
                </Grid>
                <Grid container justify='center'>
                    <Typography variant='subheading' align='center' paragraph>
                        Steps taken: {stepsTaken}
                    </Typography>
                </Grid>
                <Grid container justify='center'>
                    <Grid item className={classes.maxWidth}>
                        <MazePainter solution={solution}/>
                    </Grid>
                    <Grid container justify='center' className={classes.paddingB}>
                        <Grid item>
                            <Button variant='raised' color='secondary' onClick={this.props.handleBack}>Back</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

const styles = () => ({
    paddingB: {
        paddingBottom: 16
    },
    maxWidth: {
        maxWidth: '100%',
        paddingBottom: 16
    }
})

export default withStyles(styles)(Solution)