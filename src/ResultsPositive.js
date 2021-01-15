import React from 'react';
import Message from './Components/ResultsPositive/Message';
import Moves from './Components/ResultsPositive/Moves';
import Time  from './Components/ResultsPositive/Time'
import GoToMainMenuButton from './Components/ResultsPositive/GoToMainMenuButton';
import StartAnotherGameButton from './Components/ResultsPositive/StartAnotherGameButton';
import {Link} from 'react-router-dom';

export default function ResultsPositive() {
    return (
        <div className = "backgroundresults">
            <Message />
            <div className = "flex mt-32">
                <div className = "flex-1">
                    <Moves />
                </div>
                <div className = "flex-1">
                    <Time />    
                </div>
            </div>
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
