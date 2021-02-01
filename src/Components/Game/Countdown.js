import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import {useSelector,useDispatch} from 'react-redux';
import { timer } from '../../actions';


export default function Timer(props) {
    
    const history = useHistory();

    let losses = localStorage.getItem('losses');

    const dispatch = useDispatch();

    const difficultyTime = useSelector(state => state.player.game.defaultTime);
    const pairsFound = useSelector(state => state.player.game.pairsFound);
    const cards = useSelector(state => state.player.game.cards)
    const time = useSelector(state => state.player.game.time);
    const minutes = Math.floor(time / 60) % 60;
    const seconds = time % 60;
    if(minutes === 0 && seconds === 0){
        losses++;
        localStorage.setItem('losses', losses);
        history.push('/resultsnegative');
    }

    useEffect(() => {
        const timer1 = setInterval(() => {
            dispatch(timer())
        }, 1000)

        return (() => {
            clearInterval(timer1);
        })
    }, [])

    return (
        <div className = "container">
            <div className = "font-bold text-3xl text-white">
                {minutes}:{seconds}
            </div>
        </div>
    )
}
