const Discord = require('discord.js');
const client = new Discord.Client();
client.login('MzUwNzM4ODg2NTMzNzA5ODI1.DKAwGw.DtgtDNBmg7ruLcSZ0PYDpbnumN0');
client.on('ready', () => {
    console.log('I am ready!');
    console.log('Logged in to Jay-Bot!');
});
client.on('message', message => {
    if (message.content === 'j!help') {
        message.react("✔");
        message.author.sendMessage('```j!404 - HTTP Error 404 Not Found The Web server cannot find the file or script you asked for. Please check the URL to ensure that the path is correct. Please contact the servers <administrator> if this problem persists.``` ```j!ping - pong``` ```j!consolestatus-gives you the console status!``` ```j!help - helps you!``` ```j!suicide - does what you think it does.``` ```j!test - tests if the bot is online!``` ```j!info - gives you info about the bot!``` ```j!avatar - avatars 4 u!``` ```j!id - gives you your user id!```');
    }
});