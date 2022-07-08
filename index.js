const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { create } = require("combined-stream");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});

//////TOKEN
Client.login(process.env.TOKEN);
//////TOKEN


//////PREFIX
const prefix = "?";
//////PREFIX


Client.on("ready", () => {
    console.log("Le Bot est Opérationnel");
});


//////BONJOUR/BONSOIR
Client.on("messageCreate", message => {
    if (message.author.bot) return;

    if (message.content === prefix + "Bonjour"){
        message.reply("Bonjour");
    }
    if (message.content === prefix + "bonjour"){
        message.reply("Bonjour");
    }
})
Client.on("messageCreate", message => {
    if (message.author.bot) return;

    if (message.content === prefix + "Bonsoir"){
        message.reply("Bonsoir");
    }
    if (message.content === prefix + "bonsoir"){
        message.reply("Bonsoir");
    }
})
//////BONJOUR/BONSOIR


//////EMBED
Client.on("messageCreate", message => {
    if (message.author.bot) return;

    if (message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("#ffffff")
            .setTitle("**__Besoin d'aide__**")
            .addField("__Informations du Bot__", "Le préfix du bot est actuellement ```?```")
            .addField("__Informations__", "Tu peux retrouver le règlement Discord dans le channel : ```#📔・𝐑è𝐠𝐥𝐞𝐦𝐞𝐧𝐭```\n Tu peux retrouver de nombreuses informations dans le channel : ```#📌・𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧𝐬```\n En cas de problème, tu peux contacter les membres du staff cités dans le channel : ```🔑・𝐄𝐪𝐮𝐢𝐩𝐞```")
            .setImage("https://static.wikia.nocookie.net/minions/images/0/04/Bob.jpg/revision/latest?cb=20150820153153&path-prefix=fr")
            .setTimestamp()
            .setFooter("🇲🅰🇷🇨");

        message.channel.send({ embeds: [embed]});
    }
    if (message.content === prefix + "HELP"){
        const embed = new Discord.MessageEmbed()
            .setColor("#ffffff")
            .setTitle("**__Besoin d'aide__**")
            .addField("__Informations du Bot__", "Le préfix du bot est actuellement ```?```")
            .addField("__Informations__", "Tu peux retrouver le règlement Discord dans le channel : ```#📔・𝐑è𝐠𝐥𝐞𝐦𝐞𝐧𝐭```\n Tu peux retrouver de nombreuses informations dans le channel : ```#📌・𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧𝐬```\n En cas de problème, tu peux contacter les membres du staff cités dans le channel : ```🔑・𝐄𝐪𝐮𝐢𝐩𝐞```")
            .setImage("https://static.wikia.nocookie.net/minions/images/0/04/Bob.jpg/revision/latest?cb=20150820153153&path-prefix=fr")
            .setTimestamp()
            .setFooter("🇲🅰🇷🇨");
            
        message.channel.send({ embeds: [embed]});
    }
});
//////EMBED


//////ARRIVÉ/DÉPART
Client.on("guildMemberAdd", member => {
    console.log("Un membre est arrivé.");
    Client.channels.cache.get("793180326398263347").send("<@" + member.id + ">*** est arrivé !***");
    member.roles.add("793221345667710976");
});
Client.on("guildMemberRemove", member => {
    console.log("Un membre a quitté le serveur.");
});
//////ARRIVÉ/DÉPART


//////Clear
var data = new SlashCommandBuilder()
    .setName("clean")
    .setDescription("Commande pour supprimer des messages.")
    .addIntegerOption(option =>
            option.setName("number")
                .setDescription("Nombre de messages que vous souhaitez supprimer.")
                .setRequired(true)
    );
Client.on("ready", async () => {
    Client.guilds.cache.get("792946496038764545").commands.create(data);

    console.log("bot");
})
Client.on("interactionCreate", interaction => {
    if(interaction.isCommand())
        if(interaction.commandName === "clean"){
            var number = interaction.options.getInteger("number");

            if(number >= 1 && number <= 100){
                interaction.channel.bulkDelete(number);
                interaction.reply({content: number + " Message(s) supprimé(s).", ephemeral: true});
            }
            else {
                interaction.reply({content: "Le nombre de message à supprimer doit être compris entre 1 et 100.", ephemeral: true});
            }
        }
})
//////Clear