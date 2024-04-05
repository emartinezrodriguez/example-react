import React, { useEffect, useState } from "react";
const RenderPokemon = ({ pokemonName }) => {
    return <p>{pokemonName}</p>
}

const UseEffectComponent = () => {
    const [pokemons, setPokemons] = useState<any>({})
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokedex/')
          .then((response) => {
            return response.json()
          })
          .then((pokemons) => {
            setPokemons(pokemons)
          })
      }, [])
    return (
        <>
          {/* {JSON.stringify(pokemon)} */}
          {pokemons?.results?.map(pokemon => {
               return (
                <RenderPokemon key={pokemon.name} pokemonName={pokemon.name} />
               )
          })}
        </>
      );
}

export default UseEffectComponent