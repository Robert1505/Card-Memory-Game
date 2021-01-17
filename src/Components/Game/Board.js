import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import Card from "./Card";
import Grid from "@material-ui/core/Grid";
import {useSelector, useDispatch} from 'react-redux';
import {initializeBoard} from '../../actions'

export default function Board(props) {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.player.game.cards);
  const dummyData = new Array(cards).fill(0);
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

  useEffect(() => {
    dispatch(initializeBoard())
  }, [])

  

  const generateCards = () => {

    for (let i = 0; i < dummyData.length / 2; i++) {
      let randomPoz = Math.floor(Math.random() * (dummyData.length + 1));
      while (dummyData[randomPoz] !== 0) {
        randomPoz = Math.floor(Math.random() * (dummyData.length + 1));
      }
      dummyData[randomPoz] = i;

      randomPoz = Math.floor(Math.random() * (dummyData.length + 1));
      while (dummyData[randomPoz] !== 0) {
        randomPoz = Math.floor(Math.random() * (dummyData.length + 1));
      }
      dummyData[randomPoz] = i;
    }

    return dummyData.map((data, idx) => {
      return (
        <Grid item xs={2}>
          <Card color={colors[data]} idx={idx}/>
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
