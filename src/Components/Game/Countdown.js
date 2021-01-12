import React, {useState} from 'react';
import { Redirect } from 'react-router';


export default function Timer() {
    
    const [totalSeconds, setTotalSeconds] = useState(10);
    const [minutes, setMinutes] = useState((totalSeconds / 60) % 60);
    const [seconds, setSeconds] = useState(totalSeconds % 60);

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
