import React from 'react';
import { useSelector } from 'react-redux';

export default function Time(props) {

    const time = useSelector(state => state.player.game.time);

    const defaultTime = useSelector(state => state.player.game.defaultTime);

    return (
        <div className = "text-3xl font-bold text-center text-white">
            Time: {defaultTime - time} seconds
        </div>
    )
}
