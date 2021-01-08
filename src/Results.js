import React from 'react';
import Message from './Components/Results/Message';
import Moves from './Components/Results/Moves';
import Time  from './Components/Results/Time'
import GoToMainMenuButton from './Components/Results/GoToMainMenuButton';
import StartAnotherGameButton from './Components/Results/StartAnotherGameButton';
import {Link} from 'react-router-dom';

export default function Results() {
    return (
        <div>
            <Message />
            <Moves />
            <Time />
            <div className = "text-center absolute inset-x-0 bottom-0 mb-8">
                <div className = "flex">
                    <div className = "flex-1">
                        <Link to = '/start'>
                            <GoToMainMenuButton />
                        </Link>
                    </div>
                    <div className = "flex-1">
                        <Link to = '/game'>
                            <StartAnotherGameButton/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
