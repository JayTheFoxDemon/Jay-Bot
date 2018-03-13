const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let gif = ["http://0.media.dorkly.cvcdn.com/62/49/6318f988198210c1abe5632f2ca102d1.gif", "http://1.bp.blogspot.com/-Fo1OVjndOow/VACBg2CFTwI/AAAAAAAACA8/IRR5kSPXcUU/s1600/SHIKIN%2BMERKINTÄÄN%2BSEE%2BYA%2BAT%2BTRACON.gif"];
    let user = message.mentions.users.first();

    let gifresult = Math.floor((Math.random() * gif.length))

    let reason = args.slice(0).join(" ");

    let msgs = [`@${message.author.username} Stabs @${user.username}!`, `${message.author.username} lunges at ${user.username}! ${user.username} attempts to dodge ${message.author.username}'s knife, but instead gets stabbed!`, `${message.author.username} and ${user.username} get into a knife fight. ${user.username} gets stabbed!`];
    let result = Math.floor((Math.random() * msgs.length))
    if (message.mentions.users.size < 1) return message.reply('You must mention someone!').catch(console.error);
    const embed = {
        "color": 0x000066,
        "image": {
            "url": gif[gifresult]
        },
        "title": msgs[result],
        "author": {
            "name": "Jay-Bot",
            "icon_url": "https://cdn.discordapp.com/avatars/350738886533709825/f37dd0e7d3f776234a4286fe1ddd3464.jpg?size=1024"
        }
    };
    message.channel.send({ embed });
};