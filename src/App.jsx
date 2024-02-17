// import { useState } from "react";
import Scoreboard from "./components/Scoreboard.jsx";
import Card from "./components/Card.jsx";
import "./styles/App.css";

function App() {
  return (
    <>
      <h1>Pokémon Memory Game</h1>
      <Scoreboard />
      <Card pokemonName="charmander" />
      <Card pokemonName="bulbasaur" />
      <Card pokemonName="squirtle" />
    </>
  );
}

export default App;
