
const { Client, GatewayIntentBits, Partials, Collection, Message } = require('discord.js');
const config = require('./config.json');

const client = new Client({
    intents: [Object.keys(GatewayIntentBits)],
    partials: [Object.keys(Partials)],
});

client.setMaxListeners(0);

client.on('messageCreate', async (Message) => {

    // **agregar comandos**

    // runas de league of legend
    if (Message.content === '/runas') {
        return Message.reply({ content: `https://www.leagueofgraphs.com/es/champions/runes` })
    }

    // Versión de parche de league of legend
    if (Message.content === '/lol') {
        return Message.reply({ content: `https://www.leagueoflegends.com/es-mx/news/tags/patch-notes/` })
    }

    // Versión de parche de valorant
    if (Message.content === '/valorant') {
        return Message.reply({ content: `https://playvalorant.com/es-mx/news/tags/patch-notes/` })
    }

    // Opgg
    if (Message.content === '/opgg') {
        return Message.reply({ content: `https://www.op.gg/?hl=es_ES` })
    }
})

client.login(config.token).then(() => {
    console.log(`${client.user.username} esta online`);
}).catch((err) => {
    console.log(err);
});