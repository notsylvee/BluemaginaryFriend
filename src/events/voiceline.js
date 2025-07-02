const { PermissionFlagsBits } = require("discord.js");

module.exports = {
    name: "messageCreate",
    async execute(message) {

        if (message.author.bot || !message.guild) return;
        if (!message.guild.members.me.permissionsIn(message.channel.id).has(PermissionFlagsBits.SendMessages)) return;
        const chance = Math.random() * 250;
        const voiceLines = [
            "I Remember your name- wait..no I don't.",
            "That is a really nice looking door.",
            "What?",
            "Can you stop stealing things.",
            "Were they right about you?.. Who are they?",
            "That isn't yours.",
            "I think there's something beneath your skin. you should pry it out, kinda gross..",
            "Hi~",
            "I can see your organs..",
            "AAAAHH!!",
            "BOO!",
            "Did I scare you?",
            "Why are you so rude?",
            "You aren't a good friend.",
            "Hey.",
            "How big is this place?"
        ];
        const voiceLine = voiceLines[Math.floor(Math.random() * voiceLines.length)];
        if (chance < 249) {
            return;
          } else {
            message.channel.send(`${voiceLine}`);
          };
    },
};