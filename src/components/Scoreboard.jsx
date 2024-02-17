import { useState } from "react";

function Scoreboard() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  if (score > bestScore) {
    setBestScore(score);
  }

  return (
    <div>
      <p>Score: {score}</p>
      <p>Best Score: {bestScore}</p>
      <button type="button" onClick={() => setScore(score + 1)}>
        Add to Score
      </button>
      <button type="button" onClick={() => setScore(0)}>
        Reset Score
      </button>
    </div>
  );
}

export default Scoreboard;
