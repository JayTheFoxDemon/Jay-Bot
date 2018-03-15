const fs = require('fs');
const ytdl = require('ytdl-core');
const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let msg = args.slice(0).join(" ");
    if (!args[0]) return message.reply("Give me something to play!");
    const streamOptions = { seek: 0, volume: 1 };
    var voiceChannel = message.member.voiceChannel;
    voiceChannel.join().then(connection => {
        console.log("joined channel");
        const stream = ytdl(msg, { filter: 'audioonly' });
        const dispatcher = connection.playStream(stream, "auto");
        dispatcher.on("end", end => {
            console.log("left channel");
            voiceChannel.leave();
        });
    }).catch(err => console.log(err))
}