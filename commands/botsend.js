const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {

    if(message.channel.type === "dm") return;
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Anda tidak diperbolehkan menulis kepada orang lain melalui bot..")
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let sendTo = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));
        
        if(!sendTo) return message.reply("Anda harus menentukan orang yang ingin Anda kirimi surat.");
        message.delete(1);

        

        sendToMessage = message.content.slice(9);

        let dmChannel = bot.channels.find(`name`, "legacy-pm");
        if(!dmChannel) return message.channel.send("Tidak dapat menemukan saluran DM.");

        let sendToEmbed = new Discord.RichEmbed()
        .setDescription(`pesan dari: ${message.guild.name}`)
        .setColor("#d42c20")
        .addField("Ditulis oleh: ", message.author.username)
        .addField("Kata orang itu:", `**${sendToMessage}**`);

        let sendToChannel = new Discord.RichEmbed()
        .setDescription(`${message.author.username} menulis ke ${sendTo}`)
        .addField("Orang itu menulis:", sendToMessage);

        console.log(message.author.username + " menulis ke " + sendTo.username + " dengan pesan " + sendToMessage);
        //dmChannel.send(message.author + " wrote to " + sendTo + " with the message " + sendToMessage);
        dmChannel.send(sendToChannel);
        
        sendTo.send(sendToEmbed);
        
        message.channel.send("✅");


}

module.exports.help = {
    name: "botsend"
}