import React from 'react';
import { useSelector } from 'react-redux';
import timeElapsed from  '../Game/Countdown.js';

export default function Time(props) {

    return (
        <div className = "text-3xl font-bold text-center text-white">
            Time: {timeElapsed()}
        </div>
    )
}
