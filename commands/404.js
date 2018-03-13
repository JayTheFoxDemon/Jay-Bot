const Discord = require('discord.js');
exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor(0x000066)
        .addField("The Bot cannot find the script or command you asked for.", "Please check the bots command list to ensure that this command exists.")
        .addField("** **", 'Please contact @JayTFD#8881 if this problem persists.')
    message.channel.sendMessage({ embed });
    console.log(`${member} used j!404`);
};