export const chooseDifficulty = (cards, time) => {
    return {
        type: "CHOOSE_DIFFICULTY",
        payload: {
            cards, time
        }
    }
}

export const setName = (playerName) => {
    return {
        type: "SET_NAME",
        payload: {
            playerName
        }
    }
}