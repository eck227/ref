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
