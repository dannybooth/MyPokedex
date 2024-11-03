// src/PokemonSearch.js
import React, { useState } from 'react';
import axios from 'axios';

const PokemonSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async (event) => {
        event.preventDefault(); // Prevent the default form submission
        setError(''); // Clear previous errors
        setPokemon(null); // Clear previous search results

        try {
            // Fetch Pokémon data from the PokéAPI
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
            setPokemon(response.data); // Set the Pokémon data to state
        } catch (err) {
            setError('No Pokémon found with that name.'); // Handle fetch errors
        }
    };

    return (
        <div>
            <h1>Pokémon Search</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter Pokémon name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {pokemon && (
                <div>
                    <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                    <p>ID: {pokemon.id}</p>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            )}
        </div>
    );
};

export default PokemonSearch;