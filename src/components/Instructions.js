import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';

class Instructions extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant='headline' align='center' gutterBottom>What maze do you want solved?</Typography>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}


export default Instructions