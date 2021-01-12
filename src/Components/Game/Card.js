import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core";
import {useSpring, animated as a} from 'react-spring';
import { render } from 'react-dom';

const useStyles = makeStyles((theme) => ({
    card: {
        height: 148,
        width: 148,
        background: 'white'
    }
}));

export default function Card(props) {
    const classes = useStyles();
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })
    return (
        <div className={classes.card} style = {{backgroundColor: props.color}} onClick={() => set(state => !state)}>
            <a.div className="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
            <a.div className="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
        </div>
    )
}

render(<Card />, document.getElementById('root'))