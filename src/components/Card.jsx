import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/Card.css";

function Card({ pokemonName }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    let ignore = false;

    async function fetchPokemon() {
      if (!ignore) {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/" + pokemonName
        );
        const data = await response.json();
        const picture = data.sprites.other["official-artwork"].front_default;
        setImageUrl(picture);
      }
    }

    fetchPokemon();

    return () => {
      ignore = true;
    };
  }, [pokemonName]);

  return (
    <div className="pokemon-card">
      <h2>{pokemonName}</h2>
      <img src={imageUrl} alt={pokemonName} />
    </div>
  );
}

Card.propTypes = {
  pokemonName: PropTypes.string,
};

export default Card;
