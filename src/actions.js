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

export const flipCard = (cardNumber) => {
    return {
        type: "FLIP_CARD",
        payload: {
            cardNumber
        }
    }
}

export const initializeBoard = (cards) => {
    return {
        type: "INITIALIZE_BOARD",
        payload: {
            cards
        }
    }
}