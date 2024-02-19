import PropTypes from "prop-types";
import "../styles/Scoreboard.css";

function Scoreboard({ score, bestScore }) {
  return (
    <div className="scoreboard">
      <p>
        <span>Score</span>: {score}
      </p>
      <p>
        <span>Best Score</span>: {bestScore}
      </p>
    </div>
  );
}

Scoreboard.propTypes = {
  score: PropTypes.number,
  bestScore: PropTypes.number,
};

export default Scoreboard;
