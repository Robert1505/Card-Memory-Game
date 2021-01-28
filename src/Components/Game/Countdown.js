import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import {useSelector} from 'react-redux';


export default function Timer(props) {
    
    const history = useHistory();
    const difficultyTime = useSelector(state => state.player.game.time);
    const pairsFound = useSelector(state => state.player.game.pairsFound);
    const cards = useSelector(state => state.player.game.cards)
    const [totalSeconds, setTotalSeconds] = useState(difficultyTime);
    const [minutes, setMinutes] = useState((totalSeconds / 60) % 60);
    const [seconds, setSeconds] = useState(totalSeconds % 60);
    let secondsRemains = 0;
    
    setTimeout(() => {
        if(totalSeconds !== -1 && pairsFound === cards / 2){
            secondsRemains = totalSeconds;
        }
        else if(totalSeconds !== -1){
            setTotalSeconds(totalSeconds - 1);
            setSeconds(totalSeconds % 60);
            setMinutes(Math.floor((totalSeconds / 60)) % 60);
        }
        else{
            history.push("resultsnegative")
        }
    }, 1000);

    const timeElapsed = () => {
        secondsRemains = totalSeconds;
        if(pairsFound === cards / 2){
            return secondsRemains;
        }
    }

    return (
        <div className = "container">
            <div className = "font-bold text-3xl text-white">
                {minutes}:{seconds}
            </div>
        </div>
    )
}
