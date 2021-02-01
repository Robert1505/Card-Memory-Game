import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import Card from "./Card";
import Grid from "@material-ui/core/Grid";
import {useSelector, useDispatch} from 'react-redux';
import {flipBack, initializeBoard} from '../../actions';
import {useHistory} from 'react-router-dom';
import {timer} from '../../actions';



export default function Board(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  let wins = localStorage.getItem('wins');
  const cardsNumber = useSelector(state => state.player.game.cards);   
  let board = useSelector(state => state.player.game.board);
  let pairsFound = useSelector(state => state.player.game.pairsFound);
  // let bestTimeEasy = localStorage.getItem('bestTimeEasy');
  // let bestTimeMedium = localStorage.getItem('bestTimeMedium');
  // let bestTimeHard = localStorage.getItem('bestTimeHard');
  let score = useSelector(state => state.player.game.time); 
  let defaultTime = useSelector(state => state.player.game.defaultTime);

  useEffect(() => {
    dispatch(initializeBoard());
  }, [])

  useEffect(() => {
    if(pairsFound === cardsNumber / 2){
      wins++;
      localStorage.setItem('wins', wins);
      if(cardsNumber === 12){
        localStorage.setItem('bestTimeEasy', defaultTime - score);
      }
      else if(cardsNumber === 18){
        localStorage.setItem('bestTimeMedium', defaultTime - score);
      }
      else if(cardsNumber === 24){
        localStorage.setItem('bestTimeHard', defaultTime - score);
      }
      history.push('/resultspositive');
    }
  }, [pairsFound])

  const generateCards = () => {

    return board.map((data, idx) => {
      return (
        <Grid item xs={2}>
          <Card color={data.color} idx={idx}/>
        </Grid>
      );
    });
  };

  return (
    <div className = "mt-32 ml-16">
      <Grid container spacing={3}>
        {generateCards()}
      </Grid>
    </div>
  );
}
