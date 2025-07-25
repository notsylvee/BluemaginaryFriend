const { PermissionFlagsBits } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
    name: "messageCreate",
    async execute(message) {

        if (message.author.bot || !message.guild) return;

        const voicelinesJsonData = await fs.readFile("data/voicelines.json", {encoding: "utf8"});
        const voicelinesMap = JSON.parse(voicelinesJsonData);
        const voicelines = voicelinesMap["chatlines"];
        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
        
        const chance = Math.random() * 400;
        if (chance < 398) {
            return;
          } else {
            message.channel.send(`<:BlumaginaryFriend:1395288604196212827> ${voiceline.text}`).catch((err) => {return});
          };
    },
};