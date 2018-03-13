exports.run = function(client, message, args) {
    message.react("✔");
    message.author.send({
        embed: {
            color: 000776,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            title: "Moderation Commands",
            description: " ",
            fields: [{
                    name: "j!kick",
                    value: "Usage: j!kick [@user] [reason]"
                },
                {
                    name: "j!ban",
                    value: "DO NOT USE THIS YET! it is not finished and will crash the bot!"
                },
                {
                    name: "j!purge",
                    value: "clears the chat!"
                },
            ],
        }
    });
    message.author.send({
        embed: {
            color: 000776,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            title: "Other commands",
            description: " ",
            fields: [{
                    name: "j!help",
                    value: "You already know what this does now."
                },
                {
                    name: "j!ping",
                    value: "pong!"
                },
            ],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: "©JayTheFoxDemon"
            }
        }
    });
    message.author.send({
        embed: {
            color: 000776,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            title: "Fun commands",
            description: " ",
            fields: [{
                    name: "j!suicide",
                    value: "SUICIDE IS NEVER THE ANSWER!!"
                },
                {
                    name: "j!kill",
                    value: "Usage: j!kill [@user]"
                },
                {
                    name: "j!404",
                    value: "The Bot cannot find the script or command you asked for."
                },
                {
                    name: "j!cry",
                    value: "T.T"
                },
                {
                    name: "j!suggest",
                    value: "Use this to suggest things for the bot! Usage: j!suggest [suggestion]"
                }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: "©JayTheFoxDemon"
            }
        }
    });
};