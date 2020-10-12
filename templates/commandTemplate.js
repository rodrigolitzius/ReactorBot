const Discord = require("discord.js");

module.exports = {
    // Execução do comando
    run: (client, botUtils, message, args) => {
        newError = botUtils.newError;
        try {
            // Codigo do comando
        
        } catch(err) {
            let embed = new Discord.MessageEmbed()
                .setTitle("Erro inesperado")
                .setDescription("Um erro inesperado aconteceu. por favor contate os ADMs\n\nUm log foi criado com mais informações do erro");
            message.channel.send(embed)
            console.log(`=> ${newError(err, this.config.name, message.guild.id)}`);
        }
    },

    // Configuração do comando
    config: {
        name: "nome",
        noalias: "Sem sinonimos",
        aliases: [],
        description: "descrição",
        usage: "uso",
        accessableby: "acessibilidade"
    }
}