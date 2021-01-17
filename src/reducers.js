import {combineReducers} from 'redux';


const INITIAL_STATE = {
    player: {
        name: ""
    },
    game: {
        difficulty: "",
        cards: 12,
        time: 30,
        moves: 0,
        lastTwo: [],
        /// Array de zerouri, daca board[i] = 0, cartea i nu este flipped, board[i] = 1, cartea i este flipped
        board: []
    }
};

let newPlayer, newGame;


export const gameReducer = (oldState = INITIAL_STATE, action) => {
    switch(action.type) {
        case "SET_NAME":
            newPlayer = {...oldState.player};
            newPlayer.name = action.payload.name;
            return {
                ...oldState,
                player: {...newPlayer}
            }
        case "CHOOSE_DIFFICULTY":
            if (action.payload.cards !== null && action.payload.time !== null) {
                newGame = {...oldState.game};
                newGame.cards = action.payload.cards;
                newGame.time = action.payload.time;
                return {
                    ...oldState,
                    game: {...newGame}
                }
            } else {
                return {
                    ...oldState
                }
            }
           
        case "INCREASE_MOVES":
            newGame = {...oldState.game};
            newGame.moves = newGame.moves + 1;
            return{
                ...oldState,
                game: {...newGame}
            }
        case "FLIP_CARD": 
            newGame = {...oldState.game};
            newGame.lastTwo.push(action.payload.cardNumber);
            return {
                ...oldState,
                game: {...newGame}
            }
        case "INITIALIZE_BOARD": {
            newGame = {...oldState.game};
            // BUG: Se initializeaza cu o singura valoare, ar trebui sa fie un array de n elemente, unde n este numarul de carti
            newGame.board = new Array(action.payload.cards).fill(false);
            return {
                ...oldState,
                game: {...newGame}
            }
        }
        default:
            return oldState;
    }
}

export default combineReducers({
    player: gameReducer
});