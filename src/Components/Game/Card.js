import React, {useState, useEffect} from 'react';
import { makeStyles } from "@material-ui/core";
import {useSpring, animated as a} from 'react-spring';
import { useDispatch, useSelector } from "react-redux";
import {increaseMoves, flippedCards, flipBack} from '../../actions';


const useStyles = makeStyles((theme) => ({
    card: {
        height: 148,
        width: 148,
        background: 'white'
    }
}));

export default function Card(props) {

    const dispatch = useDispatch();
    const classes = useStyles();
    const [flipped, setFlipped] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })

    let lastTwo = useSelector(state => state.player.game.lastTwo);   
    let cards = useSelector(state => state.player.game.cards);
    let isFlippedInBoard =  useSelector(state => state.player.game.board.length === 0 ? false :  state.player.game.board[props.idx].value );

    const handleClick = () => {
        if (isFlippedInBoard === false)
        dispatch(flippedCards(props.idx));
    }

    useEffect(() => {
        setFlipped(isFlippedInBoard)
    }, [isFlippedInBoard])

    useEffect(() => {
        if (lastTwo.length == 2) {
            setTimeout(() => {
                dispatch(flipBack())
            }, 1000)
        }
        
    }, [lastTwo.length])

    return (
        <div className={classes.card} style = {{backgroundColor: props.color}} onClick={() => handleClick()}>
            <a.div className="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
            <a.div className="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
        </div>
    )
}