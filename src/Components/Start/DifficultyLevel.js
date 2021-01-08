import React from 'react';
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

export default function DifficultyLevel() {
    
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

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
                >
                <option aria-label="None" value="" />
                <option >Easy</option>
                <option >Medium</option>
                <option >Hard</option>
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
