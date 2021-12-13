import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

function Pokemons ({pokemons}) {

const [pokemonImages, setPokemonImages] = useState('');
const [pokemonData, setPokemonData] = useState('');
const [pokemonMoves, setPokemonMoves] = useState('');
const [abilities, setAbilities] = useState('');

    useEffect(() => {

            async function fetchData() {
                try {

                    const result = await axios.get(pokemons);
                    setPokemonImages(result.data.sprites.front_default);
                    setPokemonData(result.data);
                    setPokemonMoves(result.data.moves);
                    setAbilities(result.data.abilities);
                } catch
                    (e) {
                    console.error(e);
                }
            }
            fetchData()

        } , []
    )


    return (
        <div>
            <h1>{pokemonData.name}</h1>
                <img src={pokemonImages} width={120} height={120} />
                <p><strong>moves: {pokemonMoves.length}</strong>  </p>
                <p><strong>weight: {pokemonData.weight}</strong> </p>
            <h3>Abilities:</h3>
            <section className="abilities">

                {abilities && abilities.map((item) =>
                {return <p key={item.ability.name}>{item.ability.name}</p>})}
            </section>
        </div>

    )

}

export default Pokemons