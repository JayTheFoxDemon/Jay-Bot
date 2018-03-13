exports.run = (client, message, args) => {
    message.channel.send(`@${message.author.username} has commited suicide.`);
};