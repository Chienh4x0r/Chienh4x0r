const Discord = require("discord.js");
const prefix = "!";
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

Client.on("ready", () => {  // Activité [streaming]
        console.log("Bot connecté !")
        console.log(`Statistiques globales : \n\nLe bot a un total de ${Client.guilds.cache.size} serveurs. \nPour un total de ${Client.users.cache.size} membres.`)
        console.log("Connecté en tant que " + Client.user.id + " | Prefix : " + prefix + " | Nombre de Serveurs "+ Client.guilds.cache.size +" | Nombres de salons "+ Client.channels.cache.size +" | Utilisateur totaux "+ Client.users.cache.size +" | Nombre d'emojis totaux "+ Client.emojis.cache.size +'');
        Client.user.setStatus("Surveille LeBonstore"); 
        setTimeout(()=> {
        Client.user.setActivity("Surveille LeBonstore ", {
            type: "STREAMING",
            url: "https://www.twitch.tv/twitch"
        }, 100);
    })
});

//var checkminutes =3, checkthe_interval = checkminutes * 1 * 1000; //

//setInterval(function() {
//	Client.channels.cache.get("905052553153224724").send("!d bump");
//	//Or anything else
//}, checkthe_interval);-


Client.on("guildMemberAdd", member => { //rôles automatique
        console.log("un membre est arrivé");
        Client.channels.cache.get ("904422659549446154").send("<@" + member.id + "> Bienvenue sur Le Bon Store je te laisse regarder la boutique de jeux.");
        member.roles.add("904400313061081138")
});

client.login(process.env.token);