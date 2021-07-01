const Discord = require("discord.js")
const moment = require("moment")
const client = new Discord.Client()

client.on("ready", () => {
    console.log("online");
    const channel = client.guilds.cache.get("774396898190557184").channels.cache.get("829004224640843827")
    channel.messages.fetch().then(messages => {
        setInterval(() => {
            const message = messages.filter(msg => msg.author.id === client.user.id)
            
            const total = 1630620000000 - Date.parse(new Date());
            const seconds = Math.floor( (total/1000) % 60 );
            const minutes = Math.floor( (total/1000/60) % 60 );
            const hours = Math.floor( (total/(1000*60*60)) % 24 );
            const days = Math.floor( total/(1000*60*60*24) );
            

            if(message.size === 0){
                const embed = new Discord.MessageEmbed()
                .setTitle("Sonic Colors Ultimate")
                .setColor("#0000FF")
                .setDescription(`${days} days\n${hours} hours\n${minutes} minutes\n${seconds} seconds`)
                .setTimestamp(1630620000000)
                
                channel.send(embed)
            }else{
                const embed = new Discord.MessageEmbed()
                .setTitle("Sonic Colors Ultimate")
                .setColor("#0000FF")
                .setDescription(`${days} days\n${hours} hours\n${minutes} minutes\n${seconds} seconds`)
                .setTimestamp(1630620000000)
                message.first().edit(embed)
            }
        }, 2000)
    })
})


client.login("ODUxMDIwMjA3NDQ2Mjk0NTM4.YLyMVA.GeyuBev6Yep2mbMyR2qFCQeWqbk")