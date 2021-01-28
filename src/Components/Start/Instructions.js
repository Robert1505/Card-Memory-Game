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

export default function Instructions() {

    const classes = useStyles();

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <div className = "text-center mt-20">
                <Button onClick={togglePopup} className={classes.root}>Instructions</Button>
            </div>
            {isOpen && <PopUp
                content={<>
                    <b>Instructions</b>
                    <br/>
                    <br/>
                    <br/>
                    <b>
                        &#x25CF; First you need to SET the NAME and the DIFFICULTY LEVEL! <br/> 
                        <br/>
                        <br/>
                        &#x25CF; STORY! &#x25CF; 
                        <br/>
                        <br/>
                        &#x25CF; You are a thief which is arrested for bank robbery. You want to escape from prison, but you need to break a high security system first. Escape from Prison is a CARD MEMORY GAME where you need to discover WHICH CARDS MATCH to ESCAPE from the PRISON. The CARDS represent a HIGH SECURITY PUZZLE and you need to HACK it! <br/>
                        <br/>
                        <br/>
                        &#x25CF; Press 'P' to PAUSE the GAME! <br/>
                        <br/>
                        &#x25CF; If there IS A MATCH, the 2 cards will be eliminated from the game. <br/>
                        &#x25CF; If there ISN'T A MATCH, the 2 cards will flip back to their original state. <br />
                        &#x25CF; When all the matches WILL BE FOUND, you will ESCAPE from the prison and you will be FREE! <br/>
                        <br/>
                        <br/>
                        &#x25CF; DIFFICULTY LEVELS: <br/>
                        <br/>
                            &#x25CF; EASY - you have 12 cards and 30 seconds to solve the puzzle <br/>
                            &#x25CF; MEDIUM - you have 18 cards and 45 seconds to solve the puzzle <br/>
                            &#x25CF; HARD - you have 24 cards and 65 seconds to solve the puzzle <br/>
                        <br/>
                        <br/>
                        &#x25CF; GOOD LUCK!!! &#x25CF; <br/>
                    </b>
                </>}
                handleClose={togglePopup}
            />}
        </div>
    )
}
