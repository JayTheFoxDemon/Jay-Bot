const reqEvent = (event) => require(`../events/${event}`)
require('../events/ready.js')
require('../events/message.js')
require('../events/reconnecting.js')
require('../events/disconnect.js')
module.exports = client => {
    client.on('ready', () => reqEvent('ready')(client));
    client.on('reconnecting', () => reqEvent('reconnecting')(client));
    client.on('disconnect', () => reqEvent('disconnect')(client));
    client.on('message', reqEvent('message'));
};