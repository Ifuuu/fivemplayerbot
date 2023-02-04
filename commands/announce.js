const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send("Why are you trying to announce something?");
    let aMessage = args.join(" ").slice(22);
    let aEmbed = new Discord.RichEmbed()
        .setTitle("New Announcement")
        .setFooter(message.author.username, message.author.displayAvatarURL)
        .setTimestamp()
        .setColor("#9B9B9B")
        .setDescription(aMessage);
  
    let announceChannel = message.guild.channels.find(`name`, "announcements");
    if(!announceChannel) return message.channel.send(`**SERVER MENGUDARA** @everyone`);

  
    message.delete();
    announceChannel.send(aEmbed);
  
    return;
  }

  module.exports.help = {
    name: 'ann',
};