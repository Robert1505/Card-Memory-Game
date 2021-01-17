import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core";
import {useSpring, animated as a} from 'react-spring';
import { render } from 'react-dom';
import { useDispatch } from "react-redux";
import {increaseMoves, flipCard} from '../../actions';


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
    const [flipped, setFlipped] = useState(props.flipped)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })

    const handleClick = () => {
        setFlipped(state => !state);
        props.flip(props.idx);
        dispatch(increaseMoves());
        dispatch(flipCard(props.idx))
    }

    return (
        <div className={classes.card} style = {{backgroundColor: props.color}} onClick={() => handleClick()}>
            <a.div className="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
            <a.div className="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
        </div>
    )
}

// render(<Card />, document.getElementById('root'))