import {combineReducers} from 'redux';


const INITIAL_STATE = {
    playerName: '',
    cards: 0,
    time: 0
};

let newPlayer;


export const gameReducer = (oldState = INITIAL_STATE, action) => {
    switch(action.type) {
        case "SET_NAME":
            newPlayer = [...oldState.player];
            newPlayer.push({
                playerName: action.payload.playerName
            })
            return {
                ...oldState,
                player: [...newPlayer]
            }
        case "CHOOSE_DIFFICULTY":
            newPlayer = [...oldState.player];
            newPlayer.push({
                cards: action.payload.cards,
                time: action.payload.time
            })
            return {
                ...oldState,
                cards: [...newPlayer],
                time: [...newPlayer]
            }
        default:
            return oldState;
    }
}

export default combineReducers({
    player: gameReducer
});