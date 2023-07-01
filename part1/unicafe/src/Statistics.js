import React from "react";

export default function Statistics({ good, bad, neutral, all }) {
  return (
    <>
      <h3>Statistics : </h3>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
      <p>All : {all}</p>
      <p>Average : {all / 3}</p>
      <p>Positive : {(good / all) * 100} %</p>
    </>
  );
}
