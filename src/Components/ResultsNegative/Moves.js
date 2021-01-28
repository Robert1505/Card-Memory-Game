import React from 'react';
import {useSelector} from 'react-redux';

export default function Moves() {

    const moves = useSelector(state => state.player.game.moves);

    return (
        <div className = "text-3xl font-bold text-center text-white">
            Moves: {moves / 2}
        </div>
    )
}
