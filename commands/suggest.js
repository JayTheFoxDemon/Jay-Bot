exports.run = (client, message, args) => {
    let suggestion = args.slice(0).join(" ");
    if (!args[0]) return message.reply("Suggest something!!");
    console.log(`${message.author} suggested ${suggestion}`);
};