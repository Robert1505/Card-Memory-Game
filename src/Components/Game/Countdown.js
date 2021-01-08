import React, {useState} from 'react'

export default function Timer() {
    

    const [totalSeconds, setTotalSeconds] = useState(80);
    const [minutes, setMinutes] = useState((totalSeconds / 60) % 60);
    const [seconds, setSeconds] = useState(totalSeconds % 60);

    setTimeout(() => {
        setTotalSeconds(totalSeconds - 1);
        setSeconds(totalSeconds % 60);
        setMinutes(Math.floor((totalSeconds / 60)) % 60);
    }, 1000);



    return (
        <div className = "container">
            <div className = "font-bold text-3xl text-white">
                {minutes}:{seconds}
            </div>
        </div>
    )
}
