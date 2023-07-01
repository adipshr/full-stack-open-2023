import React from "react";
import StatisticLine from "./StatisticLine";

export default function Statistics({ good, bad, neutral, all }) {
  let positive = (good / all) * 100;

  if (all < 1) {
    return <h3>No feedback given</h3>;
  } else
    return (
      <>
        <StatisticLine text={"Good :"} value={good} />
        <StatisticLine text={"Neutral :"} value={neutral} />
        <StatisticLine text={"Bad :"} value={bad} />
        <StatisticLine text={"All :"} value={all} />
        <StatisticLine text={"Average :"} value={all / 3} />
        <StatisticLine text={"Positive :"} value={`${positive} %`} />
      </>
    );
}
