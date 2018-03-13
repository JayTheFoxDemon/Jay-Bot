exports.run = function(client, message, args) {
    message.channel.sendMessage(`**Pong!** ${Date.now() - message.createdTimestamp} ms.`)
};