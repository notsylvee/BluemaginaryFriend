const { PermissionFlagsBits } = require("discord.js");

module.exports = {
    name: "messageCreate",
    async execute(message) {

        if (message.author.bot || !message.guild) return;
        if (!message.guild.members.me.permissionsIn(message.channel.id).has(PermissionFlagsBits.SendMessages)) return;
        const chance = Math.random() * 250;
        const voiceLines = [
            "You look scared. Or not. You never really change your expression.",
            "This place stinks. You also kind of smell.",
            "I see your organs. I think you should go see a doctor or something.",
            "I don't like it down here.",
            "Huh. Do you hear that?",
            "I can see your insides. Gross.",
            "I think there's something beneath your skin. You should pry it out, it's kinda gross.",
            "Can we go over there?",
            "Where are we going?",
            "Do you have to talk?",
            "Do you know yourself? I'd like to know myself.",
            "This place is musty.",
            "Were they right about you?",
            "Can you stop following me?",
            "I don't want to freak you out, but I think I heard something.",
            "Oh. That wall isn't painted with blood. They just used regular paint. That's nice.",
            "It's nine thirty. There's fish everywhere.",
            "Do you hear that?",
            "Why are the walls blood red? That's weird. I don't like it.",
            "Do you own this place? Pretty big building for someone as small as you.",
            "What're you doing?",
            "Where is that music coming from?",
            "Did you see that? That was weird.",
            "Yeah, this doesn't feel safe.",
            "We should go somewhere else.",
            "You're weird.",
            "Why are you so quiet?",
            "I remember your name- oh, wait... No I don't.",
            "What will happen when time runs out? Eh, probably best not to think about it.",
            "That's a really nice looking door."
        ];
        const voiceLine = voiceLines[Math.floor(Math.random() * voiceLines.length)];
        if (chance < 249) {
            return;
          } else {
            message.channel.send(`${voiceLine}`);
          };
    },
};