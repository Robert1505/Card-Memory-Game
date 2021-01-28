export const chooseDifficulty = (cards, time) => {
    return {
        type: "CHOOSE_DIFFICULTY",
        payload: {
            cards, time
        }
    }
}

export const setName = (name) => {
    return {
        type: "SET_NAME",
        payload: {
            name
        }
    }
}

export const increaseMoves = () => {
    return {
        type: "INCREASE_MOVES"
    }
}

export const flippedCards = (cardNumber) => {
    return {
        type: "FLIPPED_CARDS",
        payload: {
            cardNumber
        }
    }
}

export const initializeBoard = (card) => {
    return {
        type: "INITIALIZE_BOARD",
        payload: {
            card
        }
    }
}

export const flipBack = () => {
    return {
        type: "FLIP_BACK",
    }
}

export const resetMoves = () => {
    return {
        type: "RESET_MOVES",
    }
}

export const resetGame = () => {
    return {
        type: "RESET_GAME",
    }
}

export const resetButton = () => {
    return {
        type: "RESET_BUTTON",
    }
}
