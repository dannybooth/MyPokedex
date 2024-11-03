const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000; // Change the port number to 3000

app.use(cors());

app.get('/api/pokemon', async (req, res) => {
    try {
        const { name } = req.query;
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        let pokemonList = response.data.results.map((pokemon, index) => ({
            name: pokemon.name,
            id: index + 1,
        }));

        if (name) {
            const searchTerm = name.toLowerCase();
            pokemonList = pokemonList.filter((pokemon) => pokemon.name.includes(searchTerm));
        }

        res.json(pokemonList);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Pokémon data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
