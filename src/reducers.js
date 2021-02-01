import {combineReducers} from 'redux';


const INITIAL_STATE = {
    player: {
        name: ""
    },
    game: {
        cards: 12,
        addTime: 0,
        time: 30,
        moves: 0,
        lastTwo: [],
        pairsFound: 0,
        board: [],
        defaultTime: 30,
        minutes: 1,
        seconds: 30
    }
};

let newPlayer, newGame;

const colors = [
    "#E3170A",
    "#42BFDD",
    "#FF66B3",
    "#23CE6B",
    "#DEB841",
    "#37323E",
    "#274C77",
    "#FF6F59",
    "#9893DA",
    "FB5012",
    "#4B1D3F",
    "#00FF00",
];



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
                newGame.defaultTime = action.payload.time;
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
        case "FLIPPED_CARDS": 
            newGame = {...oldState.game};
            if (newGame.lastTwo.length !== 2) {
                newGame.moves++;
                newGame.board[action.payload.cardNumber].value = true;
                newGame.lastTwo.push(action.payload.cardNumber);
            }
            return {
                ...oldState,
                game: {...newGame}
            }
        case "INITIALIZE_BOARD": {
            newGame = {...oldState.game};
            newGame.board = [];
            newGame.time = newGame.defaultTime;
            newGame.addTime = 0;
            for (let i = 0; i < newGame.cards; i++) {
                newGame.board.push({
                    value: false,
                    color: 0
                })
            }
            let cardsNumber = newGame.cards;
            for (let i = 0; i < cardsNumber / 2; i++) {
                let randomPoz = Math.floor(Math.random() * (cardsNumber));
                while (newGame.board[randomPoz].color !== 0) {
                  randomPoz = Math.floor(Math.random() * (cardsNumber));
                }
                newGame.board[randomPoz].color = colors[i];
                randomPoz = Math.floor(Math.random() * (cardsNumber));
                while (newGame.board[randomPoz].color !== 0) {
                  randomPoz = Math.floor(Math.random() * (cardsNumber));
                }
                newGame.board[randomPoz].color = colors[i];
            }
            return {
                ...oldState,
                game: {...newGame}
            }
        }
        case "FLIP_BACK": {
            newGame = {...oldState.game};
            if(newGame.lastTwo.length === 2){
                if (newGame.board[newGame.lastTwo[0]].color === newGame.board[newGame.lastTwo[1]].color){
                    newGame.pairsFound++;
                }
                else {
                    newGame.board[newGame.lastTwo[0]].value = false;
                    newGame.board[newGame.lastTwo[1]].value = false;
                }
                newGame.lastTwo.pop();
                newGame.lastTwo.pop();
            }
            return {
                ...oldState,
                game: {...newGame}
            }
        }
        case "RESET_GAME": {
            newGame = {...oldState.game};
            newGame.moves = 0;
            newGame.pairsFound = 0;
            newGame.lastTwo = [];
            newGame.time = newGame.defaultTime;
            return {
                ...oldState,
                game: {...newGame}
            }
        }
        case "RESET_BUTTON": {
            newGame = {...oldState.game};
            newGame.moves = 0;
            newGame.pairsFound = 0;
            newGame.lastTwo = [];
            newGame.board = [];
            newGame.time = newGame.defaultTime;
            for (let i = 0; i < newGame.cards; i++) {
                newGame.board.push({
                    value: false,
                    color: 0
                })
            }
            let cardsNumber = newGame.cards;
            for (let i = 0; i < cardsNumber / 2; i++) {
                let randomPoz = Math.floor(Math.random() * (cardsNumber));
                while (newGame.board[randomPoz].color !== 0) {
                  randomPoz = Math.floor(Math.random() * (cardsNumber));
                }
                newGame.board[randomPoz].color = colors[i];
                randomPoz = Math.floor(Math.random() * (cardsNumber));
                while (newGame.board[randomPoz].color !== 0) {
                  randomPoz = Math.floor(Math.random() * (cardsNumber));
                }
                newGame.board[randomPoz].color = colors[i];
            }
            return {
                ...oldState,
                game: {...newGame}
            }
        }
        case "TIMER": {
            newGame = {...oldState.game};
            newGame.time = newGame.time - 1;
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