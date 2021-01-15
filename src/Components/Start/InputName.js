import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {setName} from '../../actions';


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

function InputName(props) {

    const classes = useStyles();

    return (
        <div className = "text-center mt-32">
            <form className={classes.root} noValidate autoComplete="off">
                <TextField onChange = {Object.assign(props.playerName, (e) => (e.target.value))}  className = {classes.text} id="outlined-basic" label="Enter Your Name" variant="outlined" color="secondary" />
            </form>
        </div>   
    )
}

const mapStateToProps = (state) => {
    return {
        playerName: state.player.playerName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: () => dispatch(setName())
    }
}

export default  connect(mapStateToProps, {mapDispatchToProps,
    setName
})(InputName);
