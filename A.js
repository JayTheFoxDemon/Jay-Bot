const Discord = require('discord.js');
const client = new Discord.Client();
require('./util/eventLoader.js')(client);

client.login('MzUwNzM4ODg2NTMzNzA5ODI1.DYiWHw.Tc4e2MLjjF8yoFZK-NgMl0MzAes');



var prefix = "j!"
client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.find('name', 'member-log');
    if (!channel) return;
    channel.send({
        embed: {
            color: 000776,
            title: `${member}`,
            description: `User Left • ` + new Date(),
        }
    });
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'member-log');
    if (!channel) return;
    channel.send({
        embed: {
            color: 000776,
            title: `${member}`,
            description: `User Joined • ` + new Date(),
        }
    });
});
var reload = (message, cmd) => {
    const error = Error;
    delete require.cache[require.resolve('./commands/' + cmd)];
    delete require.cache[require.resolve('../a.js' + cmd)];
    try {
        let cmdFile = require('./commands/' + cmd);
    } catch (err) {
        message.channel.sendMessage(`problem loading ${cmd}: ${err}`).then(
            Response => Response.delete(100).catch(error => console.log(error.stack))
        ).catch(error > console.log(error.stack));
    }
    message.channel.sendMessage(`${cmd} reload was a success!`).then(
        Response => Response.delete(100).catch(error => console.log(error.stack))
    ).catch(error > console.log(error.stack));
};
exports.reload = reload;


client.on('ready', () => {
    client.user.setGame('j!help');
});