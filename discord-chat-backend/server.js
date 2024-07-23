require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Client, GatewayIntentBits } = require('discord.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

const channelId = process.env.DISCORD_CHANNEL_ID;

client.once('ready', () => {
  console.log('Discord bot is ready!');
});

client.login(process.env.DISCORD_BOT_TOKEN);

app.post('/api/send-message', (req, res) => {
  const message = req.body.message;
  const channel = client.channels.cache.get(channelId);
  channel.send(message)
    .then(() => res.sendStatus(200))
    .catch(error => {
      console.error('Error sending message:', error);
      res.status(500).json({ error: 'Failed to send message' });
    });
});

app.get('/api/get-messages', (req, res) => {
  const channel = client.channels.cache.get(channelId);
  channel.messages.fetch({ limit: 10 })
    .then(messages => {
      const formattedMessages = messages.map(msg => ({
        author: msg.author.username,
        content: msg.content,
        timestamp: msg.createdAt
      }));
      res.json(formattedMessages);
    })
    .catch(error => {
      console.error('Error fetching messages:', error);
      res.status(500).json({ error: 'Failed to fetch messages' });
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});