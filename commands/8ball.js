const Discord = require("discord.js");
module.exports.run = async(client, message, args) => {

    if (!args[0]) return message.reply("Ask a question!!");
    let replies = ["Yes.", "No.", "Maybe.", "I don't know..."];

    let result = Math.floor((Math.random() * replies.length))
    let question = args.slice(0).join(" ");
    let embed = new Discord.RichEmbed()
        .setColor(0x000066)
        .addField("Question", question)
        .addField("Answer", replies[result]);
    message.channel.send(embed);
}