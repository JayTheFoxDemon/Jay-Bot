const main = require(`../commands/${command}`);
exports.run = function(client, message, args) {
    let cmd = args.join(' ');
    main.reload(message, cmd);
};