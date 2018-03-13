const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mod-log');
    if (!modlog) return message.reply(`I can't find uour mod-log`);
    if (reason.length < 1) return message.reply('You must supply a reason!');
    if (message.mentions.users.size < 1) return message.reply('You must mention someone!').catch(console.error);

    if (!message.guild.member(message.author).hasPermissions("BAN_MEMBERS")) {
        return message.reply(`You don't have permissions!`)
    }
    if (message.guild.member(message.author).has("BAN_MEMBERS")) {
        message.guild.member(user).ban();
    } {
        const embed = new Discord.RichEmbed()
            .setColor(0x000066)
            .setTimestamp()
            .addField('Action:', 'ban')
            .addField('User:', `${message.member.username}#${message.member.discriminator}`)
            .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
        client.channels.get('name', 'mod-log').sendmessage(embed);
    }
};