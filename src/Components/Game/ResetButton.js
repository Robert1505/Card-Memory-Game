import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #ffffff 30%, #ffffff 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 3px rgb(255, 0, 0)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        fontWeight: 500,
        color: 'black'
    },
});

export default function ResetButton() {
    const classes = useStyles();

    return (
        <div className = "">
            <Button className={classes.root}>Reset Game</Button> 
        </div>
    )
}
