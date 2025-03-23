const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3000;
const DISCORD_BOT_TOKEN = "MTM1MjQxNjk2MjcyMTg3ODE0OA.GXqT76.rRAVP8pdi0CyYHcktWq2ZtujqpqxycUXtxtIYU"; // Insira seu token do bot aqui

app.use(cors());

app.get("/discord/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const response = await axios.get(`https://discord.com/api/users/${userId}`, {
            headers: { Authorization: `Bot ${DISCORD_BOT_TOKEN}` }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar dados do Discord" });
    }
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
