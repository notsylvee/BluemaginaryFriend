module.exports = {
    name: "messageCreate",
    async execute(message) {

        if (message.author.id !== "1318490033464021032") return;
        if (message.content === "You're defective.") {message.channel.send("What? No, I'm not.")}
        if (message.content === "Something is wrong with you.") {message.channel.send("But I'm Fine. Why are you being so rude?")}
        if (message.content === "You are a disgrace to our manufactures. Why do you think there are so many of me, and so few of you.") {message.channel.send("I'm one in a million.")}
    },
};