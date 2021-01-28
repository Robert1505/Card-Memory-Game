import React from 'react';
import Message from './Components/ResultsNegative/Message';
import Moves from './Components/ResultsNegative/Moves';
import Time  from './Components/ResultsNegative/Time'
import GoToMainMenuButton from './Components/ResultsNegative/GoToMainMenuButton';
import RetryButton from './Components/ResultsNegative/RetryButton';
import {Link} from 'react-router-dom';

export default function ResultsNegative() {

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className = "backgroundresultsnegative">
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
                            <RetryButton/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
