const { PermissionFlagsBits } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
    name: "messageCreate",
    async execute(message) {
        if (message.author.id !== "1394598431942643712") return;

        const voicelinesJsonData = await fs.readFile("data/voicelines.json", {encoding: "utf8"});
        const voicelinesMap = JSON.parse(voicelinesJsonData);
        const voicelines = voicelinesMap["angler"];
        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
        
        const chance = Math.random() * 100;
        if (chance < 90) {
            return;
          } else {
            message.channel.send(`<:BlumaginaryFriend:1395288604196212827> ${voiceline.text}`).catch((err) => {return});
          };
    },
};