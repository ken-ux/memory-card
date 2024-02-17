// import { useState } from "react";
import Scoreboard from "./components/Scoreboard.jsx";
import Card from "./components/Card.jsx";
import "./styles/App.css";

function App() {
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
      <Scoreboard />
      <div className="cards">
        {pokemonList.map((pokemon) => {
          return <Card key={pokemon} pokemonName={pokemon} />;
        })}
      </div>
    </>
  );
}

export default App;
