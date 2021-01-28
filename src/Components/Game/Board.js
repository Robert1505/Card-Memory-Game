import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import Card from "./Card";
import Grid from "@material-ui/core/Grid";
import {useSelector, useDispatch} from 'react-redux';
import {flipBack, initializeBoard} from '../../actions';
import {useHistory} from 'react-router-dom';



export default function Board(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const cardsNumber = useSelector(state => state.player.game.cards);   
  let board = useSelector(state => state.player.game.board);
  let time = 0;
  let pairsFound = useSelector(state => state.player.game.pairsFound);

  // const colors = [
  //   "#E3170A",
  //   "#42BFDD",
  //   "#FF66B3",
  //   "#23CE6B",
  //   "#DEB841",
  //   "#37323E",
  //   "#274C77",
  //   "#FF6F59",
  //   "#9893DA",
  //   "FB5012",
  //   "#4B1D3F",
  //   "#00FF00",
  // ];


  useEffect(() => {
    dispatch(initializeBoard())
  }, [])

  useEffect(() => {
    if(pairsFound === cardsNumber / 2){
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
