const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mod-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'muted');
    if (!modlog) return message.reply(`I can't find uour mod-log`).catch(console.error);
    if (!muteRole) return message.reply(`I can't find uour muted role`).catch(console.error);
    if (reason.length < 1) return message.reply('You must supply a reason!').catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('You must mention someone!').catch(console.error);
    const embed = new Discord.RichEmbed()
        .setColor(0x000066)
        .setTimestamp()
        .addField('Action:', 'mute')
        .addField('User:', `${user.username}#${user.discriminator}`)
        .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`);
    return client.channels.get(modlog.id).send(embed).catch(console.error);

    message.guild.member(user).addRole(muteRole);
};