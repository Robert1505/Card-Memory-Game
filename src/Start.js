import React from 'react';
import Title from './Components/Start/Title';
import InputName from './Components/Start/InputName';
import DifficultyLevel from './Components/Start/DifficultyLevel';
import Instructions from './Components/Start/Instructions';
import Statistics from './Components/Start/Statistics';
import StartGame from './Components/Start/StartButton';

export default function Start() {
    return (
        <div className = "background">
            <Title />
            <InputName />
            <DifficultyLevel />
            <Instructions />
            <Statistics />
            <StartGame />
        </div>
    )
}
