const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.author.id != "408996114696503297") return message.channel.send("Sorry, this is a admin command!")

    if(!args[0]) return message.channel.send("Please provide a command to reload!")

    let commandName = args[0].toLowerCase()

    try {
        delete require.cache[require.resolve(`./${commandName}.js`)]
        bot.commands.delete(commandName)
        const pull = require(`./${commandName}.js`)
        bot.commands.set(commandName, pull)
    } catch(e) {
        return message.channel.send(`Failed to reload: \`${args[0].toUpperCase}\``)
    }

    message.channel.send(`The command \`${args[0].toUpperCase()}\` has been reloaded!`)
    console.log("reload.js was executed successfully");
}

module.exports.help = {
    name: "reload"
};