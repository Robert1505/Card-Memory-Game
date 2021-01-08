import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #636363 30%, #000000 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 3px rgb(255, 0, 0)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        fontWeight: 500
    },
});

export default function Instructions() {
    const classes = useStyles();

    return (
        <div className = "text-center absolute inset-x-0 bottom-0 mb-8">
            <Link to = '/game'>
                <Button className={classes.root}>Start Game</Button>
            </Link>
        </div>
    )
}
