import React from 'react'
import Paper from '@material-ui/core/Paper';
import {split, map} from 'lodash'
import {withStyles} from '@material-ui/core/styles' // ? +/index????

class MazePainter extends React.Component {

    paintMaze = (solution) => {
        let mazeAry = split(solution, '\n')
        let dataKey = 1000000
        return (
            <table className={this.props.classes.padding} cellSpacing='0'>
                <tbody>
                {map(mazeAry, (row, key) => {
                    return (<tr key={key}>{map(row, (char) => {
                        if (char === '.')
                            return <td className={this.props.classes.open} key={dataKey++}/>
                        else if (char === '#')
                            return <td className={this.props.classes.blocked} key={dataKey++}/>
                        else if (char === 'A')
                            return <td className={this.props.classes.start} key={dataKey++}/>
                        else if (char === 'B')
                            return <td className={this.props.classes.end} key={dataKey++}/>
                        else if (char === '@')
                            return <td className={this.props.classes.path} key={dataKey++}/>
                        else
                            return <td className={this.props.classes.unknown} key={dataKey++}/>
                    })}</tr>)
                })}
                </tbody>
            </table>
        )
    }

    render() {
        const {solution} = this.props
        let maze = this.paintMaze(solution)
        return (
            <Paper elevation={8} square>
                {maze}
            </Paper>
        )
    }
}

const styles = () => ({
    padding: {
        padding: 5
    },
    blocked: {
        height: '20px',
        width: '20px',
        backgroundColor: 'gray'
    },
    path: {
        height: '20px',
        width: '20px',
        backgroundColor: 'blue'
    },
    start: {
        height: '20px',
        width: '20px',
        backgroundColor: 'green'
    },
    end: {
        height: '20px',
        width: '20px',
        backgroundColor: 'red'
    },
    open: {
        height: '20px',
        width: '20px',
        backgroundColor: 'white'
    },
    unknown: {
        height: '10px',
        width: '10px',
        backgroundColor: 'yellow'
    },
})

export default withStyles(styles)(MazePainter)