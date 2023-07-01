import { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let all = good + neutral + bad;
  return (
    <div>
      <h3>Give Feedback</h3>
      <Button handelClick={() => setGood(good + 1)} text={"Good"} />
      <Button handelClick={() => setNeutral(neutral + 1)} text={"Good"} />
      <Button handelClick={() => setBad(bad + 1)} text={"Good"} />
      <h3>Statistics : </h3>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  );
};

export default App;
