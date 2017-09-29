const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    console.log('Logged in to Jay-Bot!');
});

{
    "client_id";
    ["350738886533709825"]
}

client.on('message', message => {
    if (message.content === 'j!ping') {
        message.reply('pong');
    }
});

client.login('___________________________________________________');

client.on('message', message => {
    if (message.content === 'hi') {
        message.reply('hello');
    }
});

client.on('message', message => {
    if (message.content === 'j!suicide') {
        message.reply('Rest In Piece');
        console.log('Suicide command was used!');
    }
});

client.on('message', message => {
    if (message.content === 'j!404') {
        message.reply('https://lh6.googleusercontent.com/-fV6eIB6uPh4/VNuiiyk2P9I/AAAAAAAABdE/ClnQlRSC7sw/w392-h174-no/http.gif');
    }
    console.log('HTTP Error 404 Not Found The Web server cannot find the file or script you asked for. Please check the URL to ensure that the path is correct. Please contact the servers <administrator> if this problem persists.');
});

client.on('message', message => {
    if (message.content === 'j!suicide') {
        message.reply('Rest In Piece');
        console.log('Suicide command was used!');
    }
});

client.on('message', message => {
    if (message.content === 'j!consolestatus') {
        message.reply('The Console is Currently full of feedback from the 404 command!');
    }
});

client.on('message', message => {
    if (message.content === 'j!consolestatus') {
        message.reply('https://i.imgur.com/CcivYN8.png');
    }
});

client.on('message', message => {
    if (message.content === 'j!support') {
        message.reply('you want to support Jay-Bot? https://discord.me/dsol');
    }
});

client.on('message', message => {
    if (message.content === 'j!test') {
        message.reply('The bot is online');
    }
});

client.on('message', message => {
    if (message.content === 'j!info') {
        message.reply(' ```Jay-bot was created by ジェイ・ザ・フォックス・デーモン``` ```Jay-Bot Is Running on Discord.js!``` ```The future of this bot fills you with DETERMINATION!``` ```Saving...```');
    }
});
client.on('ready', () => {
    client.user.setGame("j!help");
});
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'member-log');
    if (!channel) return;
    channel.send(`Welcome to ${server}, ${member}!`);
});
client.on('message', message => {
    if (message.content === ';avatar') {
        message.reply(message.author.avatarURL);
        message.delete();
    }
});
