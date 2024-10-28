const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const axios = require('axios');

app.use(cors()); // Allow requests from other origins

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/api/pokemon', async (req, res) => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      const pokemonList = response.data.results.map((pokemon, index) => ({
        name: pokemon.name,
        id: index + 1,
      }));
      res.json(pokemonList);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      res.status(500).json({ message: 'Error fetching Pokémon data' });
    }
  });