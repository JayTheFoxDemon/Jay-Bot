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

client.login('MzUwNzM4ODg2NTMzNzA5ODI1.DKAwGw.DtgtDNBmg7ruLcSZ0PYDpbnumN0');

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
        message.channel.sendMessage('https://lh6.googleusercontent.com/-fV6eIB6uPh4/VNuiiyk2P9I/AAAAAAAABdE/ClnQlRSC7sw/w392-h174-no/http.gif');
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
        message.channel.sendMessage('The Console is Currently full of feedback from the 404 command!');
    }
});

client.on('message', message => {
    if (message.content === 'j!consolestatus') {
        message.channel.sendMessage('https://i.imgur.com/CcivYN8.png');
    }
});

client.on('message', message => {
    if (message.content === 'j!support') {
        message.channel.sendMessage('you want to support Jay-Bot? https://discord.me/dsol');
    }
});

client.on('message', message => {
    if (message.content === 'j!test') {
        message.reply('The bot is online');
    }
});

client.on('message', message => {
    if (message.content === 'j!info') {
        message.delete();
        message.channel.sendMessage(' ```Jay-bot was created by ジェイ・ザ・フォックス・デーモン, and hosted by MrRhody``` ```Jay-Bot Is Running on Discord.js!``` ```The future of this bot fills you with DETERMINATION!``` ```Saving...```');
    }
});
client.on('ready', () => {
    client.user.setGame("j!help");
});
client.on('message', message => {
    if (message.content === 'j!avatar') {
        message.author.sendMessage(message.author.avatarURL);
        message.delete();
    }
});
client.on('message', message => {
    if (message.content === 'j!icecream') {
        message.channel.sendMessage(':icecream:')
    }
});
client.on('message', message => {
    if (message.content === 'j!id') {
        message.author.sendMessage(message.author.id);
        message.delete();
    }
});
client.on('message', message => {
    if (message.content === 'j!cid') {
        message.author.sendMessage(message.channel.id);
        message.delete();
    }
});
client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.find('name', 'member-log');
    if (!channel) return;
    channel.send(`${member} has left us :frowning2:!`);
});
client.on('guildMembeAdd', member => {
    const channel = member.guild.channels.find('name', 'member-log');
    if (!channel) return;
    channel.send(`${member} has joined ${server}!`);
});