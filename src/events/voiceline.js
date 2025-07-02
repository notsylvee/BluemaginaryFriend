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
            "I can see your organs.. *gross*.",
            "AAAAHH!!",
            "BOO!",
            "Did I scare you?",
            "Why are you so rude?",
            "You aren't a good friend.",
            "Hey.",
            "How big is this place?",
            "I see your organs. I think you should go see a doctor or something.",
            "Do you know yourself? I’d like to know myself.",
            "Yeah, this doesn’t feel safe.",
            "Don’t do that.",
            "You don’t own that.",
            "Put that down. It’s not nice to take stuff without asking.",
            "We should go somewhere else.",
            "You’re weird.",
            "Why are you so quiet?",
            "You don’t own those. Y-you should return it, I think.",
            "Do you own this place? Pretty big building for someone as small as you.",
            "WATCH OUT!!",
            "Can we go over there?",
            "What will happen when time runs out? Eh, probably best not to think about it.",
            "The air reeks of death.",
            "Why are you following me?"
        ];
        const voiceLine = voiceLines[Math.floor(Math.random() * voiceLines.length)];
        if (chance < 249) {
            return;
          } else {
            message.channel.send(`${voiceLine}`);
          };
    },
};