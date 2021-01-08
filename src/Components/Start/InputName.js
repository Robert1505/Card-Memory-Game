import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            boxShadow: '0 3px 5px 3px rgb(255, 0, 0)'
        },
    },
    text: {
        '& > *': {
            color: 'white'
        },
    }
}));

export default function InputName() {

    const classes = useStyles();

    return (
        <div className = "text-center mt-32">
            <form className={classes.root} noValidate autoComplete="off">
                <TextField className = {classes.text} id="outlined-basic" label="Enter Your Name" variant="outlined" color="secondary" />
            </form>
        </div>   
    )
}
