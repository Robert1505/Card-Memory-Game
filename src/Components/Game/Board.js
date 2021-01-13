import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import Card from "./Card";
import Grid from "@material-ui/core/Grid";

export default function Board(props) {
  const colors = [
    "#160F29",
    "#070707",
    "#F5E960",
    "#EF7674",
    "#D91E36",
    "#F9F9F9",
    "#274C77",
    "#8B8C89",
    "#BBDB9B",
    "#9FA0C3",
    "#7B435B",
    "#30C5FF",
  ];

  const generateCards = () => {
    const dummyData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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

    return dummyData.map((data) => {
      return (
        <Grid item xs={2}>
          <Card color={colors[data]} />
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
