import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import {useSelector} from 'react-redux';


export default function Timer() {
    
    const history = useHistory();
    const difficultyTime = useSelector(state => state.player.game.time);
    const [totalSeconds, setTotalSeconds] = useState(difficultyTime);
    const [minutes, setMinutes] = useState((totalSeconds / 60) % 60);
    const [seconds, setSeconds] = useState(totalSeconds % 60);

    useEffect(() => {
        if (totalSeconds === -1) {
            history.push("resultsnegative")
        }
    }, [totalSeconds]);

    setTimeout(() => {
        if(totalSeconds !== -1){
            setTotalSeconds(totalSeconds - 1);
            setSeconds(totalSeconds % 60);
            setMinutes(Math.floor((totalSeconds / 60)) % 60);
        }
        else{
            // return (<Redirect to="results" />);
            console.log('Move to results page');
        }
    }, 1000);

    return (
        <div className = "container">
            <div className = "font-bold text-3xl text-white">
                {minutes}:{seconds}
            </div>
        </div>
    )
}
