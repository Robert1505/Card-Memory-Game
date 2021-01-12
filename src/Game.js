import React from 'react';
import Countdown from './Components/Game/Countdown';
import Moves from './Components/Game/Moves';
import ResetButton from './Components/Game/ResetButton';
import Board from './Components/Game/Board';

export default function Game() {

    return (
        <div className = "backgroundgame">
            <div className = "flex flex-1 pt-8 ml-56">
                <div className = "flex-1">
                    <Countdown/>
                </div>   
                <div className = "flex-1">
                    <Moves />
                </div>
                <div className = "flex-1">
                    <ResetButton />
                </div>
            </div>
            <Board />
        </div>
    )
}
