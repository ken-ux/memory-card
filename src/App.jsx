import { useState } from "react";
import Scoreboard from "./components/Scoreboard.jsx";
import Card from "./components/Card.jsx";
import "./styles/App.css";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [pokemonList, setPokemonList] = useState([
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
  ]);

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
      randomizePokemonList();
    }
  };

  const randomizePokemonList = () => {
    const randomizedList = [];
    const keys = pokemonList.map((pokemon, index) => index);
    while (keys.length > 0) {
      const randomKey = Math.floor(Math.random() * keys.length);
      const splicedKey = keys.splice(randomKey, 1);
      const pokemon = pokemonList[splicedKey];
      randomizedList.push(pokemon);
    }
    setPokemonList([...randomizedList]);
  };

  return (
    <>
      <h1>Pokémon Memory Game</h1>
      <p>
        Get points by clicking on an image but don&apos;t click on any more than
        once!
      </p>
      <p>
        {bestScore === pokemonList.length
          ? "Congrats! You were able to remember every Pokémon here!"
          : ""}
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
    </>
  );
}

export default App;
