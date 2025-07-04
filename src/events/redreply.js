module.exports = {
    name: "messageCreate",
    async execute(message) {

        if (message.author.id !== "1318490033464021032") return;
        if (message.content === "You're defective.") {message.channel.send("What? No, I'm not.")}
        if (message.content === "Something is wrong with you.") {message.channel.send("But I'm Fine. Why are you being so rude?")}
        if (message.content === "You are a disgrace to our manufactures. Why do you think there are so many of me, and so few of you.") {message.channel.send("I'm one in a million.")}
    
        if (message.content === "You annoy me.") {message.channel.send("I haven't even said anything to you yet.")}

        if (message.content === "You should not exist.") {message.channel.send("That's not a nice thing to say to someone else. How would you feel if I said that to you? You should not exist. Doesn't feel good, does it?")}
    },
};