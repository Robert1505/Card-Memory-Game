import React, {useState} from "react";
import PopUp from "./PopUp"; 
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

export default function Statistics() {

    const classes = useStyles();

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <div className = "text-center mt-20">
                <Button onClick={togglePopup} className={classes.root}>Statistics</Button>
            </div>
            {isOpen && <PopUp
                content={<>
                    
                    <b>Statistics</b>
                    <br/>
                    <br/>
                    <br/>
                    <b>
                        &#x25CF; Escapes(wins): {localStorage.getItem('wins')} <br/>
                        <br/>
                        &#x25CF; Caught(losses): {localStorage.getItem('losses')} <br/>
                        <br/>
                        &#x25CF; Retries(reseted): {localStorage.getItem('reset')} <br/>
                        <br/>
                        <br/>
                        &#x25CF; Best time: <br/>
                        <br/>
                            &#x25CF; Easy: {localStorage.getItem('bestTimeEasy')} seconds <br/>
                            &#x25CF; Medium: {localStorage.getItem('bestTimeMedium')} seconds<br/>
                            &#x25CF; Hard: {localStorage.getItem('bestTimeHard')} seconds<br/>
                        <br/>
                    </b>
                </>}
                handleClose={togglePopup}
            />}
        </div>
    )
}
