const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if (message.member.voiceChannel) {
        message.member.voiceChannel.leave()
    }
}