import {combineReducers} from 'redux';


const INITIAL_STATE = {
    playerName: "",
};


export const gameReducer = (oldState = INITIAL_STATE, action) => {
    switch(action.type) {
        case "SET_NAME":
            return {
                ...oldState,
                playerName: action.payload.playerName
            }
        default:
            return oldState;
    }
}

export default combineReducers({
    playerName: gameReducer
});