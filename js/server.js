require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const DISCORD_BOT_TOKEN = process.env.BOT_TOKEN; // Nunca exponha isso no frontend!

app.get("/api/discord-user/:id", async (req, res) => {
    const userId = req.params.id;

    try {
        const response = await axios.get(`https://discord.com/api/v10/users/${userId}`, {
            headers: { Authorization: `Bot ${DISCORD_BOT_TOKEN}` }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar usuário" });
    }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

app.get("/api/discord-user/:id", async (req, res) => {
    const userId = req.params.id;
    console.log(`Buscando usuário: ${userId}`); // Log no terminal

    try {
        const response = await axios.get(`https://discord.com/api/users/${userId}`, {
            headers: { Authorization: `Bot ${DISCORD_BOT_TOKEN}` }
        });

        console.log("Resposta da API:", response.data);
        res.json(response.data);
    } catch (error) {
        console.error("Erro na requisição ao Discord:", error.response?.data || error.message);
        res.status(500).json({ error: "Erro ao buscar usuário" });
    }
});
