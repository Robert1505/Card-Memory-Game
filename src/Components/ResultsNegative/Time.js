import React from 'react';
import {useSelector} from 'react-redux';

export default function Time() {

    const time = useSelector(state => state.player.game.time);

    return (
        <div className = "text-3xl font-bold text-center text-white">
            Time: {time} seconds
        </div>
    )
}
