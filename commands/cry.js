const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let gif = ["https://media1.tenor.com/images/5cc422ab110d983873a1e245e09c3083/tenor.gif", "https://data.whicdn.com/images/245214652/original.gif"];

    let result = Math.floor((Math.random() * gif.length))
    let reason = args.slice(0).join(" ");

    const embed = {
        "color": 0x000066,
        "image": {
            "url": gif[result]
        },
        "author": {
            "name": "Jay-Bot",
            "icon_url": "https://cdn.discordapp.com/avatars/350738886533709825/f37dd0e7d3f776234a4286fe1ddd3464.jpg?size=1024"
        }
    };
    message.channel.send({ embed });
};