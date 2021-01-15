import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #2892D7 30%, #173753 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 3px rgb(255, 253, 253)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        fontWeight: 500
    },
});

export default function GoToMainMenuButton() {
    const classes = useStyles();

    return (
        <div className = "">
            <Link to = '/start'>
                <Button className={classes.root}>Go to main menu</Button>
            </Link>
        </div>
    )
}
