import PropTypes from "prop-types";

function Scoreboard({ score, bestScore }) {
  return (
    <div>
      <p>Score: {score}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
}

Scoreboard.propTypes = {
  score: PropTypes.number,
  bestScore: PropTypes.number,
};

export default Scoreboard;
