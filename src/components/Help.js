import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';

class Help extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Grid container>
                    <Grid container justify='center'>
                        <Grid item xs={10}>
                            <Typography variant='subheading' align='center' paragraph>
                            A maze must be rectangular in shape and contain the characters <strong>A B . #</strong> only.
                            </Typography>

                            <Typography variant='body1' align='center' paragraph>
                            <strong>.</strong> Represents an open road<br></br>
                            <strong>#</strong> Represents a blocked road<br></br>
                            <strong>A</strong> Represents the starting point<br></br>
                            <strong>B</strong> Represents the destination point<br></br>
                            </Typography>
                        </Grid>

                        <Grid item xs={10}>
                            <Typography variant='subheading' align='center' paragraph>
                            <strong>Example Maze</strong>
                            </Typography>

                            <Typography variant='body1' align='center'>
                            ##########<br></br>
                            #A...#...#<br></br>
                            #.#.##.#.#<br></br>
                            #.#.##.#.#<br></br>
                            #.#....#B#<br></br>
                            #.#.##.#.#<br></br>
                            #....#...#<br></br>
                            ##########<br></br>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}


export default Help