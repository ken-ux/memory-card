import { useState } from "react";
import Scoreboard from "./components/Scoreboard.jsx";
import Card from "./components/Card.jsx";
import "./styles/App.css";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedPokemon, setClickedPokemon] = useState([]);

  if (score > bestScore) {
    setBestScore(score);
  }

  const handleClick = (pokemonName) => {
    if (clickedPokemon.includes(pokemonName)) {
      setScore(0);
      setClickedPokemon([]);
    } else {
      const copy = [...clickedPokemon];
      copy.push(pokemonName);
      setClickedPokemon(copy);
      setScore(score + 1);
    }
  };

  const pokemonList = [
    "bulbasaur",
    "charmander",
    "squirtle",
    "chikorita",
    "cyndaquil",
    "totodile",
    "turtwig",
    "chimchar",
    "piplup",
    "snivy",
    "tepig",
    "oshawott",
  ];

  return (
    <>
      <h1>Pokémon Memory Game</h1>
      <p>
        Get points by clicking on an image but don&apos;t click on any more than
        once!
      </p>
      <Scoreboard score={score} bestScore={bestScore} />
      <div className="cards">
        {pokemonList.map((pokemon) => {
          return (
            <Card
              key={pokemon}
              pokemonName={pokemon}
              handleClick={handleClick}
              clickedPokemon={clickedPokemon}
              setClickedPokemon={setClickedPokemon}
            />
          );
        })}
      </div>
      {/* <button type="button" onClick={() => setScore(score + 1)}>
        Add to Score
      </button>
      <button type="button" onClick={() => setScore(0)}>
        Reset Score
      </button> */}
    </>
  );
}

export default App;
