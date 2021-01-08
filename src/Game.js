import React from 'react';
import Countdown from './Components/Game/Countdown';
import Moves from './Components/Game/Moves';
import ResetButton from './Components/Game/ResetButton';
import Card from './Components/Game/Card';

export default function Game() {
    return (
        <div className = "backgroundgame">
            <div className = "flex pt-8 ml-56">
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
            <Card />
        </div>
    )
}
