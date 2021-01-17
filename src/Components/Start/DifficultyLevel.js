import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {chooseDifficulty} from '../../actions';
import {connect} from 'react-redux';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    button: {
        background: 'linear-gradient(45deg, #636363 30%, #000000 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 3px rgb(255, 0, 0)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
}));

function DifficultyLevel(props) {
    
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [cards, setCards] = useState(null); //when the difficulty is set, this variable will receive the number of cards
    const [time, setTime] = useState(null); //when the difficulty is set, this variable will receive the time limit to solve the puzzle


    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if(cards === 12) {
            setTime(30);
        }
        else if(cards === 18) {
            setTime(45);
        }
        else if(cards === 24) {
            setTime(65);
        };
    }, [cards])

    useEffect(() => {
        console.log("updated", {cards, time});
        props.chooseDifficulty(cards, time);
    }, [time])

    return (
        <div className = "text-center mt-24">
            <Button className = {classes.button} onClick={handleClickOpen}>Choose difficulty level</Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
            <DialogTitle>Difficulty Level</DialogTitle>
            <DialogContent>
            <form className={classes.container}>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="demo-dialog-native">Difficulty</InputLabel>
                <Select
                native
                input={<Input id="demo-dialog-native" />}
                onChange = {(e) => {setCards(+e.target.value)}}
                >
                <option aria-label="None" value=""/>
                <option value={12}>Easy</option>
                <option value={18}>Medium</option>
                <option value={24}>Hard</option>
                </Select>
            </FormControl>
            </form>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
            Ok
            </Button>
        </DialogActions>
        </Dialog>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cards: state.player.cards,
        time: state.player.time
    }
}

export default connect(mapStateToProps, {
    chooseDifficulty
})(DifficultyLevel);