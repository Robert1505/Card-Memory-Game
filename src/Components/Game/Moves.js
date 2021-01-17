import React from 'react';
import {useSelector} from 'react-redux';

export default function Moves() {

    const moves = useSelector(state => state.player.game.moves);

    return (
        <div className = "font-bold text-3xl text-white">
            Moves: {Math.floor(moves / 2)}
        </div>
    )
}
