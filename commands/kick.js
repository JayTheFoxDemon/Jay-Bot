const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mod-log');
    if (!modlog) return message.reply(`I can't find uour mod-log`);
    if (reason.length < 1) return message.reply('You must supply a reason!');
    if (message.mentions.users.size < 1) return message.reply('You must mention someone!').catch(console.error);

    if (message.guild.member(user).kickable) return message.reply('ERROR!');
    message.guild.member(user).kick();

    const embed = new Discord.RichEmbed()
        .setColor(0x000066)
        .setTimestamp()
        .addField('Action:', 'kick')
        .addField('User:', `${user.username}#${user.discriminator}`)
        .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`);
    return client.channels.get(modlog.id).send(embed);
};