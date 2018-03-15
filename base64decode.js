const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let msg = args.slice(0).join(" ");
    if (!args[0]) return message.reply("Give me something to encode to base64!");
    message.channel.send(Buffer.from(msg, 'base64').toString('ascii'));
};