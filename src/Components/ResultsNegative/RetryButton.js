import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FF1B1C 30%, #FB5012 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 3px rgb(255, 255, 255)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        fontWeight: 500
    },
});

export default function StartAnotherGameButton() {
    const classes = useStyles();

    return (
        <div className = "">
            <Button className={classes.root}>Retry</Button>
        </div>
    )
}
